import PriorityChip from "../PriorityChip";
import StatusChip from "../StatusChip";


export default function ActivityCard({ activity }) {
  return (
    <div className="border-b pb-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-gray-500 font-semibold">{activity.jobId}</div>
        <StatusChip status={activity.status} />
      </div>

      <div className="mt-1 font-semibold text-gray-800">{activity.title}</div>

      <div className="mt-1 text-sm text-gray-600">
        <div>📅 Start At: {activity.startAt}</div>
        <div>🕓 Due On: {activity.dueDate}</div>
        <div>📍 Location: {activity.location}</div>
        <div className="mt-1 flex items-center gap-2">
          <PriorityChip priority={activity.priority} />
          <span>{activity.activityType}</span>
        </div>
      </div>
    </div>
  );
}
