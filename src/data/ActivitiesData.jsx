export const myWorkActivities = [
  {
    id: 1,
    jobId: "WO-00293",
    status: "Scheduled",
    title: "HVAC Machine quarterly PPM services",
    startAt: "10:30 am, Dec 12, 2024",
    dueDate: "02:30 pm, Dec 14, 2024",
    location: "New York, NY",
    priority: "Medium",
    activityType: "Work Order",
  },
];

export const actionRequired = [
  {
    id: 1,
    jobId: "LEA1231312",
    status: "Pending Approval",
    title: "Leave Request",
    startAt: "15 Jan, 2025",
    dueDate: "17 Jan, 2025",
    location: "Personal",
    priority: "High",
    activityType: "Leave",
  },
];


export const activitiesTabs = ["Activities", "My Calendar"];

export const activitiesFilters = {
    status: ["New", "Scheduled", "Dispatched", "Paused", "Cancelled"],
    workOrderType: ["General Maintenance", "Service Order", "Others", "Pharma Unit", "Food Facility", "Gym Maintenance", "School Maintenance"],
    location: ["New York", "Los Angeles", "Chicago"]
};
