import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import FoodModal from "../components/restaurant/FoodModal";
import CartDrawer from "../components/restaurant/CartDrawer";

import { restaurants } from "../types/restaurant";

import { useCart } from "../context/CartContext";

export default function RestaurantDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedFood, setSelectedFood] =
    useState<any>(null);

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  const {
    totalItems,
    subtotal,
    addToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  const foodItems = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Loaded burger with cheese, lettuce and crispy fries",
      type: "Non-Veg",
    },

    {
      id: 2,
      name: "Italian Pizza",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      description:
        "Wood fired pizza with fresh mozzarella cheese",
      type: "Veg",
    },

    {
      id: 3,
      name: "Hakka Noodles",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
      description:
        "Spicy noodles tossed with vegetables and sauces",
      type: "Veg",
    },

    {
      id: 4,
      name: "Cold Coffee",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Refreshing creamy cold coffee with ice cubes",
      type: "Veg",
    },
  ];

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Restaurant Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >

            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-xl font-bold">
              🍽️
            </div>

            <h1 className="text-2xl font-bold">
              FoodFlow
            </h1>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* BACK BUTTON */}
            <button
              onClick={() => navigate("/restaurants")}
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              ← Back
            </button>

            {/* CART BUTTON */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-5 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg shadow-orange-500/20"
            >
              🛒 Cart

              <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold min-w-[24px] h-6 px-2 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="pt-36 px-6 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6">
              ● {restaurant.status}
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              {restaurant.name}
            </h1>

            <p className="text-orange-400 text-xl mt-4 font-semibold">
              {restaurant.cuisine}
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
              Experience premium dining with delicious meals,
              fast delivery, and unforgettable taste curated
              specially for food lovers.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-orange-400">
                  ⭐ {restaurant.rating}
                </p>

                <p className="text-gray-400 mt-1">
                  Rating
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-orange-400">
                  {restaurant.time}
                </p>

                <p className="text-gray-400 mt-1">
                  Delivery
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-orange-400">
                  50%
                </p>

                <p className="text-gray-400 mt-1">
                  OFF Today
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">

            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-[40px] overflow-hidden border border-orange-500/20 shadow-[0_0_60px_rgba(255,115,0,0.15)]">

              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            </div>

          </div>

        </div>

      </section>

      {/* MENU CATEGORIES */}
      <section className="px-6 pt-20 sticky top-20 z-40 bg-slate-950/90 backdrop-blur-xl pb-8">

        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">

          {[
            "All",
            "Burgers",
            "Pizza",
            "Noodles",
            "Drinks",
            "Desserts",
          ].map((category, index) => (

            <button
              key={index}
              className={`px-6 py-3 rounded-2xl border transition-all duration-300 ${
                index === 0
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

     
      {/* FOOD ITEMS */}
<section className="px-6 py-16">

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {foodItems.map((item) => {
        const cartItem = cartItems.find(
          (cart) => cart.id === item.id
        );

        return (
          <div
            key={item.id}
            className="group bg-slate-900 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 transition duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
          >

            {/* IMAGE */}
            <div
              onClick={() => setSelectedFood(item)}
              className="relative overflow-hidden cursor-pointer"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* PRICE */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-orange-500 text-sm font-bold shadow-lg">
                ₹{item.price}
              </div>

              {/* ADD BUTTON */}
              <div className="absolute top-5 right-5">

                {!cartItem ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      });
                    }}
                    className="px-5 py-2 rounded-2xl bg-white text-black font-bold hover:scale-105 transition"
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center gap-3 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2">

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        decreaseQuantity(item.id);
                      }}
                      className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 transition text-lg"
                    >
                      -
                    </button>

                    <span className="font-bold text-white min-w-[20px] text-center">
                      {cartItem.quantity}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        increaseQuantity(item.id);
                      }}
                      className="w-8 h-8 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-lg"
                    >
                      +
                    </button>

                  </div>
                )}

              </div>

              {/* TYPE */}
              <div
                className={`absolute bottom-5 left-5 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-xl ${
                  item.type === "Veg"
                    ? "bg-green-500/20 text-green-400 border border-green-500/20"
                    : "bg-red-500/20 text-red-400 border border-red-500/20"
                }`}
              >
                {item.type}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-8">

                <div>
                  <p className="text-sm text-gray-500">
                    Delivery
                  </p>

                  <h4 className="font-bold text-lg">
                    25 mins
                  </h4>
                </div>

                <button
                  onClick={() => setSelectedFood(item)}
                  className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold"
                >
                  View Details
                </button>

              </div>

            </div>

          </div>
        );
      })}

    </div>

  </div>

</section>

      {/* FLOATING CART */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 right-6 z-50">

          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 transition shadow-2xl shadow-orange-500/30 rounded-3xl px-6 py-4 flex items-center gap-4"
          >

            <div className="text-left">

              <p className="text-sm text-white/80">
                {totalItems} Items
              </p>

              <h4 className="font-bold text-lg">
                ₹{subtotal}
              </h4>

            </div>

            <div className="w-px h-10 bg-white/20" />

            <div className="font-semibold">
              View Cart →
            </div>

          </button>

        </div>
      )}

      {/* FOOD MODAL */}
      {selectedFood && (
        <FoodModal
          food={selectedFood}
          onClose={() => setSelectedFood(null)}
        />
      )}

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

    </div>
  );
}