import { FiPlus, FiUploadCloud, FiZap } from "react-icons/fi";

export default function ActionButtons({ onAdd, onImport, onHelp }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onAdd}
        className="flex items-center gap-2 px-4 py-2 h-9 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition whitespace-nowrap"
      >
        <FiPlus />
        Add New
      </button>

      <button
        onClick={onImport}
        className="flex items-center gap-2 px-4 py-2 h-9 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition whitespace-nowrap"
      >
        <FiUploadCloud />
        Import
      </button>

      <button
        onClick={onHelp}
        className="p-2 rounded-md hover:bg-yellow-100 transition text-yellow-600"
        title="Tips"
      >
        <FiZap />
      </button>
    </div>
  );
}
