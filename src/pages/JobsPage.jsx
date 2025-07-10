import Tabs from "../components/common/Tabs";
import SearchBar from "../components/common/SearchBar";
import ActionButtons from "../components/common/ActionButtons";
import FilterBar from "../components/common/FilterBar";
import ExportSettingsBar from "../components/common/ExportSettingsBar";
import DataTable from "../components/common/DataTable";
import Pagination from "../components/common/Pagination";

export default function JobsPage() {
  const handleSearch = (query) => {
    console.log("Search for:", query);
  };

  const handleTabChange = (tab) => {
    console.log("Selected tab:", tab);
  };

  const columns = [
    { key: "jobId", label: "Job ID" },
    { key: "status", label: "Status" },
    { key: "workOrderType", label: "Work Order Type" },
    { key: "dueDate", label: "Due Date" },
    { key: "client", label: "Client" },
    { key: "location", label: "Location" },
   
  ];

  const data = [
    { id: 1, jobId: "J-001", status: "New", workOrderType: "General Maintenance", dueDate: "03/06/2025", client: "ABC Corp", location: "New York" },
    { id: 2, jobId: "J-002", status: "Scheduled", workOrderType: "Service Order", dueDate: "10/06/2025", client: "XYZ Ltd", location: "Los Angeles" },
    { id: 3, jobId: "J-003", status: "Dispatched", workOrderType: "Others", dueDate: "08/05/2025", client: "QWE Inc", location: "Chicago" },
    { id: 4, jobId: "J-004", status: "Dispatched", workOrderType: "Pharma Unit", dueDate: "03/06/2025", client: "OPI Inc", location: "Chicago" },
    { id: 5, jobId: "J-005", status: "Puaused", workOrderType: "Food Facility", dueDate: "03/06/2025", client: "JKL Inc", location: "Chicago" },
    { id: 6, jobId: "J-006", status: "Cancelled", workOrderType: "Gym Maintenance", dueDate: "03/06/2025", client: "MNO Inc", location: "Chicago" },
    { id: 7, jobId: "J-007", status: "Paused", workOrderType: "School Maintenance", dueDate: "03/06/2025", client: "XYZ Inc", location: "Chicago" },
    { id: 8, jobId: "J-008", status: "Scheduled", workOrderType: "Others", dueDate: "03/06/2025", client: "XYZ Inc", location: "Chicago" },
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen px-6 py-1 space-y-4">
      {/* Tabs + Search + Buttons */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <Tabs tabs={["All Jobs", "Job Dashboard"]} onTabChange={handleTabChange} />
        <div className="flex items-center gap-4">
          <SearchBar onSearch={handleSearch} />
          <ActionButtons
            onAdd={() => console.log("Add New")}
            onImport={() => console.log("Import")}
            onHelp={() => console.log("Help")}
          />
        </div>
      </div>

      {/* Filters + Export/Settings */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <FilterBar />
        <ExportSettingsBar />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <DataTable columns={columns} data={data} />
      </div>
      <Pagination
        currentPage={1}
        totalItems={633}
        itemsPerPage={10}
        onPageChange={(page) => console.log("Page:", page)}
        onPerPageChange={(size) => console.log("Items per page:", size)}
      />
    </div>
  );
}
