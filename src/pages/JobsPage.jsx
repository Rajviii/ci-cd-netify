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
    { key: "client", label: "Client" },
    { key: "location", label: "Location" },
    { key: "status", label: "Status" },
  ];

  const data = [
    { id: 1, jobId: "J-001", client: "ABC Corp", location: "New York", status: "Open" },
    { id: 2, jobId: "J-002", client: "XYZ Ltd", location: "Los Angeles", status: "Closed" },
    { id: 3, jobId: "J-003", client: "PQR Inc", location: "Chicago", status: "Pending" },
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen px-6 py-4 space-y-4">
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
