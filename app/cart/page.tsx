"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-7xl mb-6">🛒</div>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 mt-4">
            Looks like you have not added anything yet.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello KKZONE!

I want to place an order:

${cart
  .map((item) => {
    const price = Number(
      item.price.replace(/[^0-9]/g, "")
    );

    const subtotal = price * item.quantity;

    return `• ${item.name}
Color: ${item.color || "Not specified"}
Quantity: ${item.quantity}
Price: ${item.price}
Subtotal: Rs. ${subtotal.toLocaleString()}`;
  })
  .join("\n\n")}

--------------------
Total Items: ${totalItems}
Grand Total: Rs. ${total.toLocaleString()}

Please confirm my order. Thank you!`
  );

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-yellow-400 font-semibold tracking-wide">
            KKZONE SHOPPING CART
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            Your Cart
          </h1>

          <p className="text-gray-400 mt-3">
            Review your products before placing your order.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Products */}
          <div className="lg:col-span-2 space-y-5">

            {cart.map((product) => {
              const price = Number(
                product.price.replace(/[^0-9]/g, "")
              );

              const subtotal =
                price * product.quantity;

              return (
                <div
                  key={`${product.id}-${product.color || "default"}`}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col sm:flex-row items-center gap-6"
                >

                  {/* Image */}
                  <div className="w-32 h-32 bg-zinc-800 rounded-2xl flex items-center justify-center shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={110}
                      height={110}
                      className="object-contain"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="flex-1 w-full text-center sm:text-left">

                    <h2 className="text-xl font-bold">
                      {product.name}
                    </h2>

                    <p className="text-yellow-400 font-bold mt-2">
                      {product.price}
                    </p>

                    {product.color && (
                      <p className="text-gray-400 text-sm mt-2">
                        Color:{" "}
                        <span className="text-white font-semibold">
                          {product.color}
                        </span>
                      </p>
                    )}

                    {/* Quantity */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">

                      <span className="text-gray-400 text-sm">
                        Quantity:
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            product.quantity - 1,
                            product.color
                          )
                        }
                        disabled={product.quantity <= 1}
                        className="w-9 h-9 rounded-lg border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      >
                        −
                      </button>

                      <span className="font-bold min-w-8 text-center">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            product.quantity + 1,
                            product.color
                          )
                        }
                        className="w-9 h-9 rounded-lg border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition"
                      >
                        +
                      </button>

                    </div>

                    {/* Subtotal */}
                    <p className="text-gray-400 text-sm mt-4">
                      Subtotal:{" "}
                      <span className="text-white font-bold">
                        Rs. {subtotal.toLocaleString()}
                      </span>
                    </p>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromCart(
                        product.id,
                        product.color
                      )
                    }
                    className="text-red-400 hover:text-red-300 font-semibold transition"
                  >
                    Remove
                  </button>

                </div>
              );
            })}

          </div>

          {/* Order Summary */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 h-fit lg:sticky lg:top-24">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-400 mt-7">
              <span>Total Items</span>

              <span className="text-white font-semibold">
                {totalItems}
              </span>
            </div>

            <div className="flex justify-between text-gray-400 mt-4">
              <span>Products</span>

              <span className="text-white font-semibold">
                {cart.length}
              </span>
            </div>

            <div className="border-t border-zinc-800 my-6" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-2xl font-extrabold text-yellow-400">
                Rs. {total.toLocaleString()}
              </span>
            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              className="block text-center mt-7 bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 hover:scale-[1.02] transition"
            >
              Proceed to Checkout →
            </Link>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/923218258573?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 border border-green-500 text-green-400 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-black transition"
            >
              Order Directly on WhatsApp 📲
            </a>

            {/* Continue Shopping */}
            <Link
              href="/shop"
              className="block text-center mt-4 border border-zinc-700 text-gray-300 py-4 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}