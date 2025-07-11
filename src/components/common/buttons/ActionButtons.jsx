import { FiPlus, FiUploadCloud, FiHelpCircle } from "react-icons/fi";

export default function ActionButtons({
    onAdd,
    onImport,
    onHelp,
    showAdd = true,
    showImport = true,
    showHelp = true,
}) {
    return (
        <div className="flex items-center gap-3">
            {showAdd && (
                <button onClick={onAdd} className="btn-primary">
                    <FiPlus className="mr-1" /> Add
                </button>
            )}
            {showImport && (
                <button onClick={onImport} className="btn-secondary">
                    <FiUploadCloud className="mr-1" /> Import
                </button>
            )}
            {showHelp && (
                <button onClick={onHelp} className="btn-icon">
                    <FiHelpCircle />
                </button>
            )}
        </div>
    );
}
