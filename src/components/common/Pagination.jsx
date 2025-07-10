import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Pagination({
  currentPage = 1,
  totalItems = 633,
  itemsPerPage = 10,
  onPageChange = () => {},
  onPerPageChange = () => {},
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 py-4 gap-4 border-t border-gray-200">
      
      {/* Left: Showing info */}
      <div>
        Showing <span className="font-medium">{startItem}</span> to{" "}
        <span className="font-medium">{endItem}</span> of{" "}
        <span className="font-medium">{totalItems}</span> entries
      </div>

      {/* Right: Pagination Controls */}
      <div className="flex items-center gap-4 flex-wrap">

        {/* Page size dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="perPage" className="text-sm">
            Rows per page:
          </label>
          <select
            id="perPage"
            value={itemsPerPage}
            onChange={(e) => onPerPageChange(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            {[10, 25, 50].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Prev / Next buttons */}
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className={`p-2 rounded hover:bg-gray-100 ${
              currentPage === 1 ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <span className="px-2">
            Page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className={`p-2 rounded hover:bg-gray-100 ${
              currentPage === totalPages ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
