import {
  FaBell,
  FaSearch,
  FaMapMarkerAlt,
  FaMoon,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        <div className="flex items-center bg-[#f5f6f8] rounded-xl px-4 py-3 w-[320px]">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search analytics..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        <button className="text-gray-500 hover:text-black transition">
          Live View
        </button>

        <button className="text-gray-500 hover:text-black transition">
          Inventory
        </button>

        <button className="text-gray-500 hover:text-black transition">
          Kitchen
        </button>

        <FaBell className="text-gray-500 cursor-pointer" />

        <FaMapMarkerAlt className="text-gray-500 cursor-pointer" />

        <FaMoon className="text-gray-500 cursor-pointer" />

        <button className="bg-[#e9ecff] text-gray-700 px-4 py-2 rounded-xl text-sm font-medium">
          Quick Print
        </button>

        <button className="bg-[#0f8b5f] text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90">
          Create Order
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-11 h-11 rounded-full"
        />

      </div>
    </div>
  );
};

export default Navbar;
