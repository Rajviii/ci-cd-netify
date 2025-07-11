import { FiPlus } from "react-icons/fi";

export default function CustomPlusButton({
  text,
//   icon,
  textColor = "text-white",
  bgColor = "bg-blue-600",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 h-9 ${bgColor} ${textColor} rounded-md text-sm font-semibold hover:opacity-90 transition whitespace-nowrap cursor-pointer`}
    >
      {/* {icon} */}
      <FiPlus />
      {text}
    </button>
  );
}
