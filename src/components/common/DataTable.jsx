import { useState, useEffect, useRef } from "react";
import { FiEdit2, FiTrash2, FiMoreHorizontal } from "react-icons/fi";
import { HiChevronUpDown } from "react-icons/hi2";
import StatusChip from "./StatusChip";

export default function DataTable({ columns, data }) {
  const [sortConfig, setSortConfig] = useState(null);
  const [showActionMenu, setShowActionMenu] = useState(null);
  const actionMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target)
      ) {
        setShowActionMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const order = direction === "asc" ? 1 : -1;
    return a[key] > b[key] ? order : -order;
  });

  const toggleSort = (key) => {
    setSortConfig((prev) =>
      prev?.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const toggleActionMenu = (rowIndex) => {
    setShowActionMenu((prev) => (prev === rowIndex ? null : rowIndex));
  };

  return (
    <table className="min-w-full text-sm border-t border-b border-gray-200">
      <thead className="bg-gray-50 text-gray-600 text-left">
        <tr className="hover:bg-gray-50 transition border-b border-gray-200">
          <th className="p-3">
            <input type="checkbox" />
          </th>
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => toggleSort(col.key)}
              className="p-3 cursor-pointer select-none"
            >
              <div className="flex items-center gap-1">
                {col.label}
                <HiChevronUpDown className="text-gray-400 w-4 h-4" />
              </div>
            </th>
          ))}
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <tr
            key={row.id}
            className="hover:bg-gray-50 transition border-b border-gray-200"
          >
            <td className="p-3">
              <input type="checkbox" />
            </td>
            {columns.map((col) => (
              <td key={col.key} className="px-4 py-2 text-sm text-black-800">
                {col.key === "status" ? (
                  <StatusChip status={row[col.key]} />
                ) : (
                  row[col.key]
                )}
              </td>
            ))}
            <td className="p-3 relative" ref={rowIndex === showActionMenu ? actionMenuRef : null}>
              <button
                onClick={() => toggleActionMenu(rowIndex)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <FiMoreHorizontal />
              </button>
              {showActionMenu === rowIndex && (
                <div className="absolute top-8 right-0 w-28 bg-white border border-gray-200 rounded shadow-md z-10">
                  <button
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
                    onClick={() => alert(`Edit: ${row.id}`)}
                  >
                    <FiEdit2 /> Edit
                  </button>
                  <button
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 text-red-500 flex items-center gap-2"
                    onClick={() => alert(`Delete: ${row.id}`)}
                  >
                    <FiTrash2 /> Delete
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
