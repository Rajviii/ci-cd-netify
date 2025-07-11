import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ArrowPathIcon } from "@heroicons/react/20/solid";

export default function SectionFilterBar({ filtersConfig = {}, selectedValues = {}, onFilterChange = () => {}, onRefresh = () => {} }) {
    const filtersArray = Object.entries(filtersConfig).map(([label, options]) => ({
        label,
        options,
    }));

    return (
        <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex gap-2 flex-wrap">
                {filtersArray.map((filter, idx) => (
                    <Menu as="div" className="relative inline-block text-left" key={idx}>
                        <div>
                            <MenuButton className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50">
                                {filter.label}: {selectedValues[filter.label] || "All"}
                                <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                            </MenuButton>
                        </div>
                        <MenuItems className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="py-1">
                                {filter.options.map((option, i) => (
                                    <MenuItem key={i}>
                                        {({ active }) => (
                                            <button
                                                onClick={() => onFilterChange(filter.label, option)}
                                                className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                                    } block w-full text-left px-4 py-2 text-sm`}
                                            >
                                                {option}
                                            </button>
                                        )}
                                    </MenuItem>
                                ))}
                            </div>
                        </MenuItems>
                    </Menu>
                ))}
            </div>

            <button
                onClick={onRefresh}
                className="p-2 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition"
                title="Refresh"
            >
                <ArrowPathIcon className="h-5 w-5" />
            </button>
        </div>
    );
}
