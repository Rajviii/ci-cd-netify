import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Pagination({
    currentPage = 1,
    totalItems = 633,
    itemsPerPage = 10,
    onPageChange = () => { },
    onPerPageChange = () => { },
}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const renderPageNumbers = () => {
        const pages = [];
        const range = 2;

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > range + 2) pages.push("...");
            for (
                let i = Math.max(2, currentPage - range);
                i <= Math.min(totalPages - 1, currentPage + range);
                i++
            ) {
                pages.push(i);
            }
            if (currentPage < totalPages - (range + 1)) pages.push("...");
            pages.push(totalPages);
        }

        return pages.map((page, index) =>
            page === "..." ? (
                <span key={index} className="px-2 text-gray-400">...</span>
            ) : (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded-md text-sm ${currentPage === page
                            ? "bg-blue-500 border-blue text-white font-medium"
                            : "hover:bg-white border-white text-gray-700"
                        }`}
                >
                    {page}
                </button>
            )
        );
    };

    return (
        <div className="flex justify-end items-center text-sm text-gray-600 py-4 border-t border-gray-200 flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">

                <div className="text-sm text-gray-600 whitespace-nowrap">
                    Showing <span className="font-medium">{startItem}</span> to{" "}
                    <span className="font-medium">{endItem}</span> of{" "}
                    <span className="font-medium">{totalItems}</span> entries
                </div>

                <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="inline-flex justify-center items-center gap-1 rounded-md bg-white border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        Show: {itemsPerPage}
                        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                    </MenuButton>
                    <MenuItems className="absolute z-10 right-0 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {[10, 25, 50].map((size) => (
                            <MenuItem key={size}>
                                {({ active }) => (
                                    <button
                                        onClick={() => onPerPageChange(size)}
                                        className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                            } block w-full text-left px-4 py-2 text-sm`}
                                    >
                                        {size}
                                    </button>
                                )}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>

            </div>

            <div className="flex items-center gap-2 flex-wrap">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`p-1 rounded hover:bg-gray-100 ${currentPage === 1 ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    <HiChevronLeft className="w-5 h-5" />
                </button>

                {renderPageNumbers()}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`p-1 rounded hover:bg-gray-100 ${currentPage === totalPages ? "text-gray-300" : "text-gray-600"
                        }`}
                >
                    <HiChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
