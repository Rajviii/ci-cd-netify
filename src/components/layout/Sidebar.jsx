import { useState } from "react";
import {
  MdWorkOutline,
  MdInventory2,
  MdPeopleOutline,
  MdAssessment,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

const sidebarMenus = [
  {
    title: "Work Activities",
    icon: <MdWorkOutline />,
    subItems: ["All Jobs", "Inspections", "Audits", "Projects", "Tasks"],
  },
  {
    title: "Assets",
    icon: <MdInventory2 />,
    subItems: ["Machines", "Vehicles"],
  },
  {
    title: "Customers",
    icon: <MdPeopleOutline />,
    subItems: ["Customer List", "Contacts"],
  },
  {
    title: "Reports",
    icon: <MdAssessment />,
    subItems: [],
  },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm h-full overflow-y-auto">
      <nav className="p-4 space-y-2">
        {sidebarMenus.map((menu, index) => (
          <div key={index}>
            <button
              onClick={() => toggleMenu(menu.title)}
              className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-100 rounded-md"
            >
              <div className="flex items-center gap-3 text-gray-800">
                <span className="text-xl">{menu.icon}</span>
                <span className="font-medium">{menu.title}</span>
              </div>

              {menu.subItems.length > 0 &&
                (openMenus[menu.title] ? (
                  <MdKeyboardArrowDown className="text-gray-500" />
                ) : (
                  <MdKeyboardArrowRight className="text-gray-500" />
                ))}
            </button>

            {openMenus[menu.title] && menu.subItems.length > 0 && (
              <div className="mt-1">
                {menu.subItems.map((sub, idx) => (
                  <div
                    key={idx}
                    className="pl-12 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 cursor-pointer rounded-md transition"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}