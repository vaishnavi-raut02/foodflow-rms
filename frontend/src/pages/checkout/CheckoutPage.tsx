import { useState } from "react";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export default function CheckoutPage() {

  const {
    cartItems,
    subtotal,
  } = useCart();

  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    notes: "",
  });

  const deliveryFee = 49;
  const taxes = 38;

  const total =
    subtotal + deliveryFee + taxes;
    const [paymentMethod, setPaymentMethod] =
  useState("upi");

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-32">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

        {/* LEFT */}
        <div>

          <div className="mb-10">

            <h1 className="text-5xl font-black">
              Checkout
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Complete your delivery details
            </p>

          </div>

         {/* DELIVERY CARD */}
<div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-8">

    <div>
      <h2 className="text-3xl font-black">
        Delivery Details
      </h2>

      <p className="text-gray-400 mt-2">
        Confirm your delivery information
      </p>
    </div>

    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/20 flex items-center justify-center text-2xl">
      🚚
    </div>

  </div>

  <div className="space-y-6">

    {/* FULL NAME */}
    <div>

      <label className="text-sm text-gray-400 mb-2 block">
        Full Name
      </label>

      <div className="relative">

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
          👤
        </span>

        <input
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          placeholder="Enter your full name"
          className="w-full pl-14 pr-5 py-4 bg-slate-900/80 border border-white/10 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
        />

      </div>

    </div>

    {/* PHONE */}
    <div>

      <label className="text-sm text-gray-400 mb-2 block">
        Phone Number
      </label>

      <div className="relative">

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
          📞
        </span>

        <input
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          placeholder="Enter phone number"
          className="w-full pl-14 pr-5 py-4 bg-slate-900/80 border border-white/10 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
        />

      </div>

    </div>

    {/* EMAIL */}
    <div>

      <label className="text-sm text-gray-400 mb-2 block">
        Email Address
      </label>

      <div className="relative">

        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
          ✉️
        </span>

        <input
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          placeholder="Enter email address"
          className="w-full pl-14 pr-5 py-4 bg-slate-900/80 border border-white/10 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
        />

      </div>

    </div>

    {/* ADDRESS */}
    <div>

      <label className="text-sm text-gray-400 mb-2 block">
        Delivery Address
      </label>

      <div className="relative">

        <span className="absolute left-5 top-6 text-gray-500">
          📍
        </span>

        <textarea
          rows={4}
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
          placeholder="Enter complete delivery address"
          className="w-full pl-14 pr-5 py-4 bg-slate-900/80 border border-white/10 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
        />

      </div>

    </div>

    {/* DELIVERY NOTES */}
    <div>

      <label className="text-sm text-gray-400 mb-2 block">
        Delivery Notes
      </label>

      <div className="relative">

        <span className="absolute left-5 top-6 text-gray-500">
          📝
        </span>

        <textarea
          rows={3}
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes: e.target.value,
            })
          }
          placeholder="Add delivery instructions..."
          className="w-full pl-14 pr-5 py-4 bg-slate-900/80 border border-white/10 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
        />

      </div>

    </div>

  </div>
</div>

        </div>


        {/* RIGHT */}
        <div>

          <div className="sticky top-28 bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">

            <h2 className="text-3xl font-black mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h4 className="font-bold">
                      {item.name}
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <h4 className="font-bold text-orange-400">
                    ₹{item.price * item.quantity}
                  </h4>

                </div>

              ))}

            </div>

            <div className="w-full h-px bg-white/10 my-8" />

            <div className="space-y-4">

              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Taxes</span>
                <span>₹{taxes}</span>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="flex justify-between text-2xl font-black">
                <span>Total</span>

                <span className="text-orange-400">
                  ₹{total}
                </span>
              </div>

            </div>

            {paymentMethod === "cod"
  ? "Place Order"
  : "Proceed To Payment"}

          </div>

        </div>
                {/* PAYMENT METHOD */}
<div className="mt-8 bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-8">

    <div>
      <h2 className="text-3xl font-black">
        Payment Method
      </h2>

      <p className="text-gray-400 mt-2">
        Choose your preferred payment option
      </p>
    </div>

    <div className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/20 flex items-center justify-center text-2xl">
      💳
    </div>

  </div>

  <div className="space-y-4">

    {/* UPI */}
    <button
      onClick={() => setPaymentMethod("upi")}
      className={`w-full flex items-center justify-between p-5 rounded-3xl border transition-all ${
        paymentMethod === "upi"
          ? "border-orange-500 bg-orange-500/10"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
          📱
        </div>

        <div className="text-left">

          <h3 className="font-bold text-lg">
            UPI Payment
          </h3>

          <p className="text-gray-400 text-sm">
            Google Pay, PhonePe, Paytm
          </p>

        </div>

      </div>

      {paymentMethod === "upi" && (
        <div className="text-orange-400 text-2xl">
          ✓
        </div>
      )}

    </button>

    {/* CARD */}
    <button
      onClick={() => setPaymentMethod("card")}
      className={`w-full flex items-center justify-between p-5 rounded-3xl border transition-all ${
        paymentMethod === "card"
          ? "border-orange-500 bg-orange-500/10"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
          💳
        </div>

        <div className="text-left">

          <h3 className="font-bold text-lg">
            Credit / Debit Card
          </h3>

          <p className="text-gray-400 text-sm">
            Visa, Mastercard, RuPay
          </p>

        </div>

      </div>

      {paymentMethod === "card" && (
        <div className="text-orange-400 text-2xl">
          ✓
        </div>
      )}

    </button>

    {/* COD */}
    <button
      onClick={() => setPaymentMethod("cod")}
      className={`w-full flex items-center justify-between p-5 rounded-3xl border transition-all ${
        paymentMethod === "cod"
          ? "border-orange-500 bg-orange-500/10"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
          💵
        </div>

        <div className="text-left">

          <h3 className="font-bold text-lg">
            Cash On Delivery
          </h3>

          <p className="text-gray-400 text-sm">
            Pay when order arrives
          </p>

        </div>

      </div>

      {paymentMethod === "cod" && (
        <div className="text-orange-400 text-2xl">
          ✓
        </div>
      )}

    </button>

  </div>

</div>

      </div>

    </div>
  );
}