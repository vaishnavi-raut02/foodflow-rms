import {
  FaHome,
  FaClipboardList,
  FaUtensils,
  FaMoneyBillWave,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      title: "Orders",
      icon: <FaClipboardList />,
      path: "/orders",
    },
    {
      title: "Menu",
      icon: <FaUtensils />,
      path: "/menu",
    },
    {
      title: "Billing",
      icon: <FaMoneyBillWave />,
      path: "/billing",
    },
    {
      title: "Customers",
      icon: <FaUsers />,
      path: "/customers",
    },
   
  ];

  return (
    <div className="bg-[#1d2b3f] text-[#d6deeb] w-[250px] min-h-screen flex flex-col justify-between">

      {/* TOP */}
      <div>

        <div className="p-8 border-b border-[#314056]">
          <h1 className="text-2xl font-bold text-[#67f0b5]">
            RMS
          </h1>

        </div>

        {/* MENU */}
        <div className="p-4 space-y-2 mt-4">

          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                  isActive
                    ? "bg-[#3d4763] text-[#67f0b5]"
                    : "hover:bg-[#2b3950]"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span>{item.title}</span>
            </NavLink>
          ))}

        </div>
      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-[#314056]">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500 transition-all text-sm font-medium">
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
