import { useNavigate } from "react-router-dom";

type Restaurant = {
  id: number;
  name: string;
  image: string;
  rating: string;
  time: string;
  cuisine: string;
  offer: string;
  status: string;
};

type Props = {
  restaurant: Restaurant;
};

export default function RestaurantCard({
  restaurant,
}: Props) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/restaurant/${restaurant.id}`)
      }
      className="group cursor-pointer bg-slate-900 border border-white/10 rounded-[30px] overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* OFFER */}
        <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-orange-500 text-sm font-bold shadow-lg">
          {restaurant.offer}
        </div>

        {/* STATUS */}
        <div
          className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-xl ${
            restaurant.status === "Open"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {restaurant.status}
        </div>

        {/* RATING */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xl px-3 py-1 rounded-full text-sm font-semibold">
          ⭐ {restaurant.rating}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>
            <h3 className="text-2xl font-bold group-hover:text-orange-400 transition">
              {restaurant.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {restaurant.cuisine}
            </p>
          </div>

          <div className="text-orange-400 font-semibold">
            {restaurant.time}
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-8">

          <button className="flex-1 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition font-semibold shadow-lg shadow-orange-500/20">
            View Menu
          </button>

          <button className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            ❤️
          </button>

        </div>

      </div>

    </div>
  );
}