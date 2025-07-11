import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CustomPlusButton from "../buttons/CustomPlusButton";

export default function FilterBar({ filtersConfig = {} }) {
    const filtersArray = Object.entries(filtersConfig).map(([label, options]) => ({
        label,
        options,
    }));
    const [selectedValues, setSelectedValues] = useState(() => {
        return filtersArray.reduce((acc, f) => {
            acc[f.label] = "All";
            return acc;
        }, {});
    });
    const [filters, setFilters] = useState([filtersArray[0]]);

    const addFilter = () => {
        const remaining = filtersArray.filter(
            (fa) => !filters.find((f) => f.label === fa.label)
        );

        if (remaining.length > 0) {
            setFilters((prev) => [...prev, remaining[0]]);
        }
    };


    const handleFilterChange = (label, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [label]: value,
        }));
        console.log(`Filter Changed → ${label}: ${value}`);
    };

    return (
        <div className="flex items-center gap-4 flex-wrap">
            {filtersArray.map((filter, idx) => (
                <Menu as="div" className="relative inline-block text-left" key={idx}>
                    <div>
                        <MenuButton className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 cursor-pointer">
                            {filter.label}: {selectedValues[filter.label] || "All"}
                            <ChevronDownIcon className="-mr-1 h-4 w-4 text-gray-400" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <MenuItems className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                            {filter.options.map((option, i) => (
                                <MenuItem key={i}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleFilterChange(filter.label, option)}
                                            className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block w-full text-left px-4 py-2 text-sm cursor-pointer`}
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

            {filters.length < filtersArray.length && (
                <CustomPlusButton
                    text="Filter"
                    textColor="text-blue-500"
                    bgColor="bg-gray-200"
                    onClick={addFilter}
                />
            )}
        </div>
    );
}
