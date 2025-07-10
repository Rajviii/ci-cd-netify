import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FiSettings } from "react-icons/fi";

export default function ExportSettingsBar() {
  const handleExport = (type) => {
    console.log("Export as:", type);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Export Dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50">
            Export
            <ChevronDownIcon className="-mr-1 h-4 w-4 text-gray-400" aria-hidden="true" />
          </MenuButton>
        </div>

        <MenuItems className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-1">
            {["PDF", "Excel", "CSV"].map((type) => (
              <MenuItem key={type}>
                {({ active }) => (
                  <button
                    onClick={() => handleExport(type.toLowerCase())}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block w-full text-left px-4 py-2 text-sm`}
                  >
                    {type}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      {/* Settings Button */}
      <button
        className="border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition text-black-600"
        title="Settings"
        onClick={() => console.log("Settings clicked")}
      >
        <FiSettings size={18} />
      </button>
    </div>
  );
}
