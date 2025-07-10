export const jobsTableData = [
    { id: 1, jobId: "J-001", status: "New", workOrderType: "General Maintenance", dueDate: "03/06/2025", client: "ABC Corp", location: "New York" },
    { id: 2, jobId: "J-002", status: "Scheduled", workOrderType: "Service Order", dueDate: "10/06/2025", client: "XYZ Ltd", location: "Los Angeles" },
    { id: 3, jobId: "J-003", status: "Dispatched", workOrderType: "Others", dueDate: "08/05/2025", client: "QWE Inc", location: "Chicago" },
    { id: 4, jobId: "J-004", status: "Dispatched", workOrderType: "Pharma Unit", dueDate: "03/06/2025", client: "OPI Inc", location: "Chicago" },
    { id: 5, jobId: "J-005", status: "Paused", workOrderType: "Food Facility", dueDate: "03/06/2025", client: "JKL Inc", location: "Chicago" },
    { id: 6, jobId: "J-006", status: "Cancelled", workOrderType: "Gym Maintenance", dueDate: "03/06/2025", client: "MNO Inc", location: "Chicago" },
    { id: 7, jobId: "J-007", status: "Paused", workOrderType: "School Maintenance", dueDate: "03/06/2025", client: "XYZ Inc", location: "Chicago" },
    { id: 8, jobId: "J-008", status: "Scheduled", workOrderType: "Others", dueDate: "03/06/2025", client: "XYZ Inc", location: "Chicago" },
    { id: 9, jobId: "J-009", status: "New", workOrderType: "General Maintenance", dueDate: "03/06/2025", client: "ABC Corp", location: "New York" },
    { id: 10, jobId: "J-010", status: "Scheduled", workOrderType: "Service Order", dueDate: "10/06/2025", client: "XYZ Ltd", location: "Los Angeles" },
    { id: 11, jobId: "J-011", status: "Dispatched", workOrderType: "Others", dueDate: "08/05/2025", client: "QWE Inc", location: "Chicago" },
    { id: 12, jobId: "J-012", status: "Dispatched", workOrderType: "Pharma Unit", dueDate: "03/06/2025", client: "OPI Inc", location: "Chicago" },
    { id: 13, jobId: "J-013", status: "Paused", workOrderType: "Food Facility", dueDate: "03/06/2025", client: "JKL Inc", location: "Chicago" },
    { id: 14, jobId: "J-014", status: "Cancelled", workOrderType: "Gym Maintenance", dueDate: "03/06/2025", client: "MNO Inc", location: "Chicago" },
    { id: 15, jobId: "J-015", status: "Paused", workOrderType: "School Maintenance", dueDate: "03/06/2025", client: "XYZ Inc", location: "Chicago" },
];

export const jobsColumns = [
    { key: "jobId", label: "Job ID" },
    { key: "status", label: "Status" },
    { key: "workOrderType", label: "Work Order Type" },
    { key: "dueDate", label: "Due Date" },
    { key: "client", label: "Client" },
    { key: "location", label: "Location" },
];

export const jobsFilters = {
    status: ["New", "Scheduled", "Dispatched", "Paused", "Cancelled"],
    workOrderType: ["General Maintenance", "Service Order", "Others", "Pharma Unit", "Food Facility", "Gym Maintenance", "School Maintenance"],
    location: ["New York", "Los Angeles", "Chicago"]
};

export const jobsTabs = ["All Jobs", "Job Dashboard"];
