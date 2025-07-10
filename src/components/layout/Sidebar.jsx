import { useState } from "react";
import {
  MdWorkOutline,
  MdInventory2,
  MdPeopleOutline,
  MdAssessment,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
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
      <nav className="p-4 space-y-1">
        {sidebarMenus.map((menu, index) => {
          const isOpen = openMenus[menu.title];
          const hasSubItems = menu.subItems.length > 0;

          return (
            <div key={index} className={`rounded-md ${isOpen ? "bg-gray-50" : ""}`}>
              <button
                onClick={() => toggleMenu(menu.title)}
                className="w-full flex items-center justify-between py-3 px-3 text-left hover:bg-gray-100 rounded-md"
              >
                <div className="flex items-center gap-3 text-gray-800">
                  <span className="text-xl">{menu.icon}</span>
                  <span className="font-medium">{menu.title}</span>
                </div>

                {hasSubItems &&
                  (isOpen ? (
                    <MdKeyboardArrowDown className="text-gray-500 cursor-pointer" />
                  ) : (
                    <MdKeyboardArrowUp className="text-gray-500 cursor-pointer" />
                  ))}
              </button>

              {isOpen && hasSubItems && (
                <div className="pl-4 pr-4 py-2 space-y-1">
                  {menu.subItems.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-m text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md px-2 py-1 cursor-pointer transition"
                    >
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}