type Props = {
  activeFilter: string;
  setActiveFilter: React.Dispatch<
    React.SetStateAction<string>
  >;
};

export default function RestaurantFilters({
  activeFilter,
  setActiveFilter,
}: Props) {

  const filters = [
    "All",
    "Fast Delivery",
    "Top Rated",
    "Pure Veg",
    "Under ₹300",
    "Open Now",
    "Offers",
  ];

  return (
    <div className="flex flex-wrap gap-4">

      {filters.map((filter, index) => (

        <button
          key={index}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-3 rounded-2xl border transition-all duration-300 font-medium ${
            activeFilter === filter
              ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
              : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
          }`}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}