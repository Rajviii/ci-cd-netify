import { useState } from "react";
import {
  MdWorkOutline,
  MdInventory2,
  MdPeopleOutline,
  MdAssessment,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdGrid3X3,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const sidebarMenus = [
  {
    title: "Activities",
    icon: <MdGrid3X3 />,
    path: "/activities",
    subItems: [],
  },
  {
    title: "Work Activities",
    icon: <MdWorkOutline />,
    subItems: [
      { label: "All Jobs", path: "/jobs" },
      { label: "Work Order", path: "/work-order" },
      { label: "Inspections", path: "/inspections" },
      { label: "Audits", path: "/audits" },
      { label: "Projects", path: "/projects" },
      { label: "Tasks", path: "/tasks" },
    ],
  },
  {
    title: "Assets",
    icon: <MdInventory2 />,
    subItems: [
      { label: "Machines", path: "/machines" },
      { label: "Vehicles", path: "/vehicles" },
    ],
  },
  {
    title: "Customers",
    icon: <MdPeopleOutline />,
    subItems: [
      { label: "Customer List", path: "/customers" },
      { label: "Contacts", path: "/contacts" },
    ],
  },
  {
    title: "Reports",
    icon: <MdAssessment />,
    path: "/reports",
    subItems: [],
  },
];


export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

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
              {hasSubItems ? (
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full flex items-center justify-between py-3 px-3 text-left hover:bg-gray-100 rounded-md"
                >
                  <div className="flex items-center gap-3 text-gray-800">
                    <span className="text-xl">{menu.icon}</span>
                    <span className="font-medium">{menu.title}</span>
                  </div>
                  {isOpen ? (
                    <MdKeyboardArrowDown className="text-gray-500" />
                  ) : (
                    <MdKeyboardArrowUp className="text-gray-500" />
                  )}
                </button>
              ) : (
                <Link
                  to={menu.path}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-gray-800 hover:bg-gray-100 ${
                    location.pathname === menu.path ? "bg-gray-100 text-blue-600" : ""
                  }`}
                >
                  <span className="text-xl">{menu.icon}</span>
                  <span className="font-medium">{menu.title}</span>
                </Link>
              )}

              {isOpen && hasSubItems && (
                <div className="pl-4 pr-4 py-2 space-y-1">
                  {menu.subItems.map((sub, idx) => {
                    const isActive = location.pathname === sub.path;

                    return (
                      <Link
                        to={sub.path}
                        key={idx}
                        className={`flex items-center gap-3 text-sm px-2 py-2 rounded-md cursor-pointer transition ${
                          isActive
                            ? "text-blue-600 bg-gray-100"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        <span>{sub.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
