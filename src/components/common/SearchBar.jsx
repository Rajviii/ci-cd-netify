import { FiSearch } from "react-icons/fi";

export default function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
    </div>
  );
}
