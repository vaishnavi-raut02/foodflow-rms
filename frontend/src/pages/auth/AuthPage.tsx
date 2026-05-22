import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("customer");

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10 text-white overflow-hidden relative">
      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center p-16 bg-linear-to-br from-orange-500 to-red-600 relative overflow-hidden">

          <div className="absolute top-0 right-0 text-[250px] opacity-10">
            🍔
          </div>

          <div className="relative z-10">
            <div className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg mb-8 text-sm font-medium">
              🚀 Smart Restaurant Ecosystem
            </div>

            <h1 className="text-6xl font-black leading-tight">
              FoodFlow Platform
            </h1>

            <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-lg">
              Manage restaurants, orders, inventory, analytics, and customer
              experiences from one intelligent modern platform.
            </p>

            <div className="mt-12 space-y-5">

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                <h3 className="font-bold text-lg">
                  🚚 Real-Time Order Tracking
                </h3>

                <p className="text-white/80 mt-2 text-sm">
                  Track customer orders and deliveries instantly.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                <h3 className="font-bold text-lg">
                  📊 Smart Analytics Dashboard
                </h3>

                <p className="text-white/80 mt-2 text-sm">
                  Monitor sales, customers, and restaurant performance.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                <h3 className="font-bold text-lg">
                  🍳 Kitchen & Inventory Management
                </h3>

                <p className="text-white/80 mt-2 text-sm">
                  Handle kitchen operations and stock management efficiently.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">

          {/* SIGN IN / SIGN UP TOGGLE */}
          <div className="flex bg-white/5 rounded-2xl p-1 mb-10 border border-white/10">

            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl transition-all duration-300 font-semibold ${
                isLogin
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "text-gray-400"
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl transition-all duration-300 font-semibold ${
                !isLogin
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                  : "text-gray-400"
              }`}
            >
              Sign Up
            </button>

          </div>

          {/* ROLE SELECTION */}
          <div className="grid grid-cols-2 gap-4 mb-10">

            {/* CUSTOMER */}
            <button
              onClick={() => setRole("customer")}
              className={`rounded-3xl p-6 border transition-all duration-300 text-left ${
                role === "customer"
                  ? "border-orange-500 bg-orange-500/10 scale-105 shadow-lg shadow-orange-500/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="text-4xl mb-4">🛒</div>

              <h3 className="text-xl font-bold">
                Customer
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                Order food, track deliveries, and explore restaurants.
              </p>
            </button>

            {/* RESTAURANT */}
            <button
              onClick={() => setRole("restaurant")}
              className={`rounded-3xl p-6 border transition-all duration-300 text-left ${
                role === "restaurant"
                  ? "border-orange-500 bg-orange-500/10 scale-105 shadow-lg shadow-orange-500/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="text-4xl mb-4">🏪</div>

              <h3 className="text-xl font-bold">
                Restaurant Owner
              </h3>

              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                Manage orders, kitchen, inventory, and analytics.
              </p>
            </button>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-black mb-3 leading-tight">

            {isLogin
              ? `Welcome Back ${
                  role === "customer"
                    ? "Customer"
                    : "Partner"
                } 👋`
              : `Create ${
                  role === "customer"
                    ? "Customer"
                    : "Restaurant"
                } Account 🚀`}

          </h2>

          <p className="text-gray-400 mb-10 text-lg">

            {isLogin
              ? "Sign in to continue your experience."
              : "Join the smart restaurant ecosystem platform."}

          </p>

          {/* FORM */}
          <form  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    navigate("/restaurants");
  }}
>

            {/* NAME FIELD */}
            {!isLogin && (
              <input
                type="text"
                placeholder={
                  role === "customer"
                    ? "Full Name"
                    : "Restaurant Name"
                }
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
              />
            )}

            {/* RESTAURANT EXTRA FIELDS */}
            {/* ADDRESS */}
{!isLogin && (
  <input
    type="text"
    placeholder={
      role === "customer"
        ? "Residential Address"
        : "Restaurant Address"
    }
    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
  />
)}

{/* CONTACT NUMBER */}
{!isLogin && (
  <input
    type="text"
    placeholder={
      role === "customer"
        ? "Mobile Number"
        : "Business Contact Number"
    }
    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
  />
)}

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
            />

            {/* LOGIN OPTIONS */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm text-gray-400">

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="hover:text-orange-400 transition"
                >
                  Forgot Password?
                </button>

              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-bold text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
            >
              {isLogin
                ? `Sign In as ${
                    role === "customer"
                      ? "Customer"
                      : "Restaurant Owner"
                  }`
                : `Create ${
                    role === "customer"
                      ? "Customer"
                      : "Restaurant"
                  } Account`}
            </button>

          </form>

          {/* FOOTER TEXT */}
          <p className="mt-8 text-center text-gray-400">

            {isLogin
              ? "Don’t have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-orange-400 hover:text-orange-300 transition"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>

          </p>

        </div>
      </div>
    </div>
  );
}