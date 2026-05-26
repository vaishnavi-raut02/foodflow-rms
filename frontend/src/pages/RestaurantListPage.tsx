import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { restaurants } from "../types/restaurant";
import RestaurantCard from "../components/restaurant/RestaurantCard";
import RestaurantSearch from "../components/restaurant/RestaurantSearch";
import RestaurantFilters from "../components/restaurant/RestaurantFilters";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/restaurant/CartDrawer";
export default function RestaurantListPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] =
  useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

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

          {/* SEARCH */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-10">
  <RestaurantSearch
    search={search}
    setSearch={setSearch}
  />
</div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <button className="hidden md:flex px-5 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              📍 Pune
            </button>

           <button
  onClick={() => setIsCartOpen(true)}
  className="relative px-5 py-2 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg shadow-orange-500/20"
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
      {/* HERO */}
<section className="pt-36 pb-24 px-6 relative overflow-hidden">

  {/* GRADIENTS */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full" />

  <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-orange-500/20 mb-8 text-sm text-orange-300 backdrop-blur-xl">
        ✨ Discover Amazing Food
      </div>

      <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

        Discover Restaurants

        <span className="block text-orange-500 mt-2">
          Near You
        </span>

      </h1>

      <p className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed">
        Explore trending restaurants, top-rated cuisines, and delicious
        meals delivered to your doorstep with premium dining experience.
      </p>

      {/* STATS */}
      <div className="flex flex-wrap gap-6 mt-10">

        <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
          <p className="text-3xl font-black text-orange-400">
            500+
          </p>

          <p className="text-gray-400 mt-1">
            Restaurants
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
          <p className="text-3xl font-black text-orange-400">
            30min
          </p>

          <p className="text-gray-400 mt-1">
            Avg Delivery
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl">
          <p className="text-3xl font-black text-orange-400">
            4.9★
          </p>

          <p className="text-gray-400 mt-1">
            Customer Rating
          </p>
        </div>

      </div>

    </div>
{/* RIGHT FOOD COLLAGE */}
<div className="relative hidden lg:flex items-center justify-center h-[650px] w-full">

  {/* OUTER GLOW */}
  <div className="absolute w-[520px] h-[520px] rounded-full border border-orange-500/30 border-dashed animate-spin-slow" />

  {/* GLOW */}
  <div className="absolute w-[450px] h-[450px] bg-orange-500/10 blur-3xl rounded-full" />

  {/* BURGER CARD */}
  <div className="absolute left-8 top-24 z-20 group">

    <div className="relative w-[300px] h-[380px] rounded-[40px] overflow-hidden border border-orange-500/40 shadow-[0_0_50px_rgba(255,115,0,0.25)] rotate-[-8deg] transition duration-500 group-hover:rotate-[-4deg] group-hover:scale-105">

      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
        alt="Burger"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

    </div>

  </div>

  {/* PIZZA CARD */}
  <div className="absolute right-10 top-10 z-30 group">

    <div className="relative w-[290px] h-[230px] rounded-[35px] overflow-hidden border border-orange-500/40 shadow-[0_0_40px_rgba(255,115,0,0.2)] rotate-[8deg] transition duration-500 group-hover:rotate-[4deg] group-hover:scale-105">

      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop"
        alt="Pizza"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

    </div>

  </div>

  {/* NOODLES CARD */}
  <div className="absolute right-28 bottom-16 z-20 group">

    <div className="relative w-[250px] h-[190px] rounded-[30px] overflow-hidden border border-orange-500/40 shadow-[0_0_40px_rgba(255,115,0,0.2)] rotate-[-6deg] transition duration-500 group-hover:rotate-[-2deg] group-hover:scale-105">

      <img
        src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop"
        alt="Noodles"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

    </div>

  </div>

  {/* DRINK CARD */}
  <div className="absolute right-0 bottom-4 z-10 group">

    <div className="relative w-[180px] h-[220px] rounded-[30px] overflow-hidden border border-orange-500/40 shadow-[0_0_30px_rgba(255,115,0,0.15)] rotate-[6deg] transition duration-500 group-hover:rotate-[2deg] group-hover:scale-105">

      <img
        src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop"
        alt="Drink"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

    </div>

  </div>

  {/* FLOATING STARS */}
  <div className="absolute top-16 left-1/2 text-orange-400 text-2xl animate-pulse">
    ✦
  </div>

  <div className="absolute bottom-28 left-1/3 text-orange-400 text-xl animate-bounce">
    ✦
  </div>

  <div className="absolute top-1/2 right-4 text-orange-300 text-lg animate-ping">
    ✦
  </div>

</div>

  </div>

</section>

      {/* FILTERS */}
      <section className="px-6 pb-10">

  <div className="max-w-7xl mx-auto">

    <RestaurantFilters
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
    />

  </div>

</section>

      {/* RESTAURANTS GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-12">

            <div>
              <h2 className="text-4xl font-black">
                Top Restaurants
              </h2>

              <p className="text-gray-400 mt-2">
                Handpicked restaurants curated for you
              </p>
            </div>

            <button className="hidden md:flex px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              Sort By ↓
            </button>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {restaurants.map((restaurant) => (
  <RestaurantCard
    key={restaurant.id}
    restaurant={restaurant}
  />
))}

          </div>

        </div>
      </section>

      {/* FLOATING CART */}
      <CartDrawer
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
/>

    </div>
  );
}