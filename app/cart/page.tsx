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
      <main className="min-h-screen bg-black text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl sm:text-7xl mb-6">🛒</div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Looks like you have not added anything yet.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-8 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 transition text-sm sm:text-base"
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
    <main className="min-h-screen bg-black text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-yellow-400 font-semibold tracking-wide text-xs sm:text-sm">
            KKZONE SHOPPING CART
          </p>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-2">
            Your Cart
          </h1>

          <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
            Review your products before placing your order.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Products */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">

            {cart.map((product) => {
              const price = Number(
                product.price.replace(/[^0-9]/g, "")
              );

              const subtotal =
                price * product.quantity;

              return (
                <div
                  key={`${product.id}-${product.color || "default"}`}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                >

                  {/* Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-zinc-800 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={110}
                      height={110}
                      className="object-contain w-auto h-auto max-w-full max-h-full"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="flex-1 w-full text-center sm:text-left">

                    <h2 className="text-base sm:text-xl font-bold">
                      {product.name}
                    </h2>

                    <p className="text-yellow-400 font-bold mt-2 text-sm sm:text-base">
                      {product.price}
                    </p>

                    {product.color && (
                      <p className="text-gray-400 text-xs sm:text-sm mt-2">
                        Color:{" "}
                        <span className="text-white font-semibold">
                          {product.color}
                        </span>
                      </p>
                    )}

                    {/* Quantity */}
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4">

                      <span className="text-gray-400 text-xs sm:text-sm">
                        Qty:
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
                        className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed transition text-sm sm:text-base flex items-center justify-center"
                      >
                        −
                      </button>

                      <span className="font-bold min-w-6 sm:min-w-8 text-center text-sm sm:text-base">
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
                        className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg border border-zinc-700 hover:border-yellow-400 hover:text-yellow-400 transition text-sm sm:text-base flex items-center justify-center"
                      >
                        +
                      </button>

                    </div>

                    {/* Subtotal */}
                    <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
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
                    className="text-red-400 hover:text-red-300 font-semibold transition text-sm sm:text-base"
                  >
                    Remove
                  </button>

                </div>
              );
            })}

          </div>

          {/* Order Summary */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 h-fit lg:sticky lg:top-24">

            <h2 className="text-xl sm:text-2xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-400 mt-5 sm:mt-7 text-sm sm:text-base">
              <span>Total Items</span>

              <span className="text-white font-semibold">
                {totalItems}
              </span>
            </div>

            <div className="flex justify-between text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
              <span>Products</span>

              <span className="text-white font-semibold">
                {cart.length}
              </span>
            </div>

            <div className="border-t border-zinc-800 my-4 sm:my-6" />

            <div className="flex justify-between items-center gap-4">
              <span className="font-semibold text-sm sm:text-lg">
                Total
              </span>

              <span className="text-xl sm:text-2xl font-extrabold text-yellow-400">
                Rs. {total.toLocaleString()}
              </span>
            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              className="block text-center mt-5 sm:mt-7 bg-yellow-400 text-black py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 hover:scale-[1.02] transition text-sm sm:text-base"
            >
              Proceed to Checkout →
            </Link>

            {/* Direct WhatsApp */}
            <a
              href={`https://wa.me/923218258573?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-3 border border-green-500 text-green-400 py-3 sm:py-4 rounded-xl font-bold hover:bg-green-500 hover:text-black transition text-sm sm:text-base"
            >
              Order Directly on WhatsApp 📲
            </a>

            {/* Continue Shopping */}
            <Link
              href="/shop"
              className="block text-center mt-3 border border-zinc-700 text-gray-300 py-3 sm:py-4 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition text-sm sm:text-base"
            >
              Continue Shopping
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}
