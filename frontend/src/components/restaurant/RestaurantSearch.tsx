type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function RestaurantSearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-3xl px-5 py-4 flex items-center gap-4 backdrop-blur-xl">

      {/* ICON */}
      <div className="text-gray-400 text-xl">
        🔍
      </div>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search restaurants, cuisines, dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
      />

    </div>
  );
}