export default function StatusChip({ status }) {
  const statusStyles = {
    Scheduled: "bg-green-100 text-green-700 border border-green-400",
    New: "bg-gray-100 text-gray-700 border border-gray-400",
    Paused: "bg-yellow-100 text-yellow-700 border border-yellow-400",
    Dispatched: "bg-blue-100 text-blue-700 border border-blue-400",
    Cancelled: "bg-red-100 text-red-700 border border-red-400",
  };

  const classes =
    statusStyles[status] ||
    "bg-gray-100 text-gray-600 border border-gray-300";

  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${classes}`}>
      {status}
    </span>
  );
}
