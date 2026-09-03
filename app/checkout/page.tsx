"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const total = cart.reduce((sum, item) => {
    const price = Number(
      item.price.replace(/[^0-9]/g, "")
    );

    return sum + price * item.quantity;
  }, 0);

  const handleOrder = () => {
    if (
      !name.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !address.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const products = cart
      .map((item) => {
        const price = Number(item.price.replace(/[^0-9]/g, ""));
        const subtotal = price * item.quantity;
        
        return `• ${item.name} × ${item.quantity}${
          item.color ? ` — Color: ${item.color}` : ""
        } — ${item.price} = Rs. ${subtotal.toLocaleString()}`;
      })
      .join("\n");

    const message = encodeURIComponent(
      `🛒 KKZONE — NEW ORDER

Customer: ${name}
Phone: ${phone}
City: ${city}
Address: ${address}

Products:
${products}

Total: Rs. ${total.toLocaleString()}${
        note.trim()
          ? `\n\nNote: ${note}`
          : ""
      }

Please confirm my order. Thank you!`
    );

    window.open(
      `https://wa.me/923218258573?text=${message}`,
      "_blank"
    );
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6">
        <div className="text-center">
          <div className="text-6xl sm:text-7xl mb-6">🛒</div>

          <h1 className="text-2xl sm:text-4xl font-extrabold">
            Your Cart is Empty
          </h1>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Add some products before checkout.
          </p>

          <Link
            href="/shop"
            className="inline-block mt-8 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 transition text-sm sm:text-base"
          >
            Go to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-8 sm:mb-10">
          <p className="text-yellow-400 font-semibold text-xs sm:text-sm">
            KKZONE CHECKOUT
          </p>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-2">
            Complete Your Order
          </h1>

          <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
            Enter your details and place your order through WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Customer Details */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7">

            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-7">
              Customer Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 sm:py-3 outline-none focus:border-yellow-400 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="03XXXXXXXXX"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 sm:py-3 outline-none focus:border-yellow-400 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  City *
                </label>

                <input
                  type="text"
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  placeholder="Karachi"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 sm:py-3 outline-none focus:border-yellow-400 transition text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Complete Address *
                </label>

                <textarea
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  placeholder="House / Flat, Street, Area..."
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 sm:py-3 outline-none focus:border-yellow-400 transition resize-none text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Order Note
                </label>

                <textarea
                  value={note}
                  onChange={(e) =>
                    setNote(e.target.value)
                  }
                  placeholder="Any special instructions? (Optional)"
                  rows={3}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 sm:py-3 outline-none focus:border-yellow-400 transition resize-none text-sm"
                />
              </div>

            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 h-fit">

            <h2 className="text-xl sm:text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">

              {cart.map((item) => {
                const price = Number(
                  item.price.replace(/[^0-9]/g, "")
                );

                return (
                  <div
                    key={`${item.id}-${item.color ?? "default"}`}
                    className="border-b border-zinc-800 pb-3 sm:pb-4"
                  >
                    <div className="flex justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-sm sm:text-base">
                          {item.name}
                        </p>

                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                          Qty: {item.quantity}
                        </p>

                        {item.color && (
                          <p className="text-xs sm:text-sm text-gray-400">
                            Color: {item.color}
                          </p>
                        )}
                      </div>

                      <p className="text-yellow-400 font-bold text-sm sm:text-base shrink-0">
                        Rs.{" "}
                        {(
                          price * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            <div className="flex justify-between text-gray-400 mt-5 sm:mt-6 text-sm sm:text-base">
              <span>Total Items</span>

              <span>
                {cart.reduce(
                  (sum, item) =>
                    sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="border-t border-zinc-800 my-4 sm:my-5" />

            <div className="flex justify-between items-center gap-4">
              <span className="font-semibold text-sm sm:text-lg">
                Total
              </span>

              <span className="text-xl sm:text-2xl font-extrabold text-yellow-400">
                Rs. {total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleOrder}
              className="w-full mt-5 sm:mt-7 bg-yellow-400 text-black py-3 sm:py-4 rounded-xl font-bold hover:bg-yellow-300 hover:scale-[1.02] transition text-sm sm:text-base"
            >
              Place Order on WhatsApp 📲
            </button>

            <Link
              href="/cart"
              className="block text-center mt-3 border border-zinc-700 text-gray-300 py-3 sm:py-4 rounded-xl font-semibold hover:border-yellow-400 hover:text-yellow-400 transition text-sm sm:text-base"
            >
              Back to Cart
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}
