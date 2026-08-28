"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  color?: string;
};

type AddToCartProduct = Omit<CartProduct, "quantity"> & {
  quantity: number;
};

type CartContextType = {
  cart: CartProduct[];
  addToCart: (product: AddToCartProduct) => void;
  removeFromCart: (id: number, color?: string) => void;
  updateQuantity: (
    id: number,
    quantity: number,
    color?: string
  ) => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

function normalizeCart(data: unknown): CartProduct[] {
  if (!Array.isArray(data)) {
    return [];
  }

  const result: CartProduct[] = [];

  for (const item of data) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const product = item as Record<string, unknown>;

    const id = Number(product.id);
    const quantity = Number(product.quantity);

    if (
      !Number.isFinite(id) ||
      !Number.isFinite(quantity) ||
      quantity < 1 ||
      typeof product.name !== "string" ||
      typeof product.price !== "string" ||
      typeof product.image !== "string"
    ) {
      continue;
    }

    result.push({
      id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: Math.floor(quantity),
      ...(typeof product.color === "string"
        ? { color: product.color }
        : {}),
    });
  }

  return result;
}

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  // Load cart from localStorage after component mounts.
  // We deliberately don't set another state inside the effect.
  useEffect(() => {
    const savedCart = localStorage.getItem("kkzone-cart");

    if (!savedCart) {
      return;
    }

    try {
      const parsedCart = JSON.parse(savedCart);
      const cleanCart = normalizeCart(parsedCart);

      localStorage.setItem(
        "kkzone-cart",
        JSON.stringify(cleanCart)
      );
    } catch {
      localStorage.removeItem("kkzone-cart");
    }
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        "kkzone-cart",
        JSON.stringify(normalizeCart(cart))
      );
    } catch {
      // Ignore localStorage errors
    }
  }, [cart]);

  // Add product
  const addToCart = (product: AddToCartProduct) => {
    const quantity = Math.floor(Number(product.quantity));

    if (!Number.isFinite(quantity) || quantity < 1) {
      return;
    }

    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.color === product.color
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Remove product
  const removeFromCart = (
    id: number,
    color?: string
  ) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.color === color
          )
      )
    );
  };

  // Update quantity
  const updateQuantity = (
    id: number,
    quantity: number,
    color?: string
  ) => {
    const safeQuantity = Math.floor(Number(quantity));

    if (
      !Number.isFinite(safeQuantity) ||
      safeQuantity < 1
    ) {
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id &&
        item.color === color
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item
      )
    );
  };

  // Total quantity
  const cartCount = cart.reduce(
    (total, item) => {
      const quantity = Number(item.quantity);

      return Number.isFinite(quantity)
        ? total + quantity
        : total;
    },
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}