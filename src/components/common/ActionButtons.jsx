import { FiPlus, FiUploadCloud, FiZap } from "react-icons/fi";
import CustomPlusButton from "./CustomPlusButton";

export default function ActionButtons({ onAdd, onImport, onHelp }) {
    return (
        <div className="flex items-center space-x-2">
            {/* <button
        onClick={onAdd}
        className="flex items-center gap-2 px-4 py-2 h-9 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition whitespace-nowrap cursor-pointer"
      >
        <FiPlus />
        Add New
      </button> */}

            <CustomPlusButton
                text="Add New"
                textColor="text-white"
                bgColor="bg-blue-600"
                onClick={onAdd}
            />

            <button
                onClick={onImport}
                className="flex items-center gap-2 px-4 py-2 h-9 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition whitespace-nowrap cursor-pointer"
            >
                <FiUploadCloud />
                Import
            </button>

            <button
                onClick={onHelp}
                className="p-2 rounded-md hover:bg-yellow-100 transition text-yellow-600 cursor-pointer"
                title="Tips"
            >
                <FiZap />
            </button>
        </div>
    );
}
