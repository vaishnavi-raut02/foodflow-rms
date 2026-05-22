import { useNavigate } from "react-router-dom";

export default function RestaurantLandingPage() {
  const navigate = useNavigate();
  const categories = [
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Desserts",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Drinks",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const restaurants = [
    {
      name: "Spice Garden",
      rating: "4.8",
      time: "25 mins",
      cuisine: "Indian • Chinese",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Urban Pizza",
      rating: "4.7",
      time: "20 mins",
      cuisine: "Pizza • Italian",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Sweet Heaven",
      rating: "4.9",
      time: "18 mins",
      cuisine: "Desserts • Bakery",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-xl font-bold">
              🍽️
            </div>
            <h1 className="text-2xl font-bold">FoodFlow</h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Restaurants
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Offers
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
  <button
    onClick={() => navigate("/auth")}
    className="group relative overflow-hidden px-6 py-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 font-semibold"
  >
    <span className="relative z-10">Get Started</span>

    <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition duration-300" />
  </button>
</div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 px-6">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6 text-sm text-orange-300">
              🚀 Smart Restaurant Ecosystem Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Order Delicious Food <br />
              <span className="text-orange-500">
                Manage Restaurants Smartly
              </span>
            </h1>

            <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
              One modern platform for customers, restaurants, and smart food
              operations with real-time order tracking and intelligent
              management.
            </p>

            {/* SEARCH */}
            <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Search food, restaurants, cuisines..."
                className="flex-1 bg-transparent outline-none px-4 py-3 text-white"
              />

              <button className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition font-semibold">
                Search
              </button>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg shadow-orange-500/30">
                Order Food
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold">
                Add Your Restaurant
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-bounce">
              ⭐ 4.9 Ratings
            </div>

            <div className="absolute -bottom-6 right-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-pulse">
              🚚 Live Delivery Tracking
            </div>

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
              alt="Food"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* FOOD CATEGORIES */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-bold">Popular Categories</h2>
              <p className="text-gray-400 mt-2">
                Explore trending food categories
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-orange-500/50 transition duration-300 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-linear-to-r from-orange-500 to-red-500 p-10 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 text-9xl opacity-10">
              🍕
            </div>

            <p className="text-lg font-semibold mb-2">LIMITED OFFER</p>
            <h2 className="text-5xl font-black leading-tight">
              50% OFF
            </h2>
            <p className="mt-4 text-lg text-white/90">
              On your first order above ₹499
            </p>

            <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition">
              Claim Offer
            </button>
          </div>

          <div className="rounded-3xl bg-linear-to-r from-emerald-500 to-green-700 p-10 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 text-9xl opacity-10">
              🍔
            </div>

            <p className="text-lg font-semibold mb-2">WEEKEND SPECIAL</p>
            <h2 className="text-5xl font-black leading-tight">
              Free Delivery
            </h2>
            <p className="mt-4 text-lg text-white/90">
              On all premium restaurants this weekend
            </p>

            <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-105 transition">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* TRENDING RESTAURANTS */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold">Trending Restaurants</h2>
            <p className="text-gray-400 mt-2">
              Discover top-rated restaurants near you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-xl px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {restaurant.rating}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                      {restaurant.name}
                    </h3>
                    <span className="text-orange-400 font-semibold">
                      {restaurant.time}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-2">
                    {restaurant.cuisine}
                  </p>

                  <button className="w-full mt-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANT OWNER SECTION */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-linear-to-br from-slate-900 to-slate-800 border border-white/10 p-12 lg:p-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-400 font-semibold text-lg mb-4">
              FOR RESTAURANT OWNERS
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Smart RMS Dashboard 
            </h2>

            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              Manage orders, kitchen operations, inventory, staff, analytics,
              and customer engagement from one intelligent platform.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                📦 Inventory Tracking
              </div>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                🍳 Live Kitchen Panel
              </div>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                📊 Analytics Dashboard
              </div>
             
            </div>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg shadow-orange-500/30">
              Register Your Restaurant
            </button>
          </div>

          <div className="bg-slate-950 rounded-3xl border border-white/10 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Restaurant Dashboard</h3>
              <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
                Live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Revenue</p>
                <h4 className="text-3xl font-bold mt-2">₹48K</h4>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">
                <p className="text-gray-400 text-sm">Orders</p>
                <h4 className="text-3xl font-bold mt-2">326</h4>
              </div>
            </div>

            <div className="mt-6 bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span>Kitchen Activity</span>
                <span className="text-orange-400">82%</span>
              </div>

              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[82%] bg-orange-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
          <p>© 2026 FoodFlow. Smart Restaurant Ecosystem Platform.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Terms
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
