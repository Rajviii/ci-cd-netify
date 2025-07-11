import Tabs from "../common/tabs/Tabs";
import SearchBar from "../common/filters/SearchBar";
import ActionButtons from "../common/buttons/ActionButtons";
import FilterBar from "../common/filters/FilterBar";
import ExportSettingsBar from "../common/ExportSettingsBar";
import DataTable from "../common/table/DataTable";
import Pagination from "../common/table/Pagination";
import { useState } from "react";

export default function DynamicPageLayout({
  tabs,
  columns,
  data,
  type,
  filtersConfig = [],
  children,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSearch = (query) => setSearchQuery(query);
  const handleTabChange = (tab) => console.log("Tab selected:", tab);

  const filteredData = data?.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  ) ?? [];

  return (
    <div className="bg-white min-h-screen px-6 py-4 space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <Tabs tabs={tabs} onTabChange={handleTabChange} />
        {type === "table" && (
          <div className="flex items-center gap-4">
            <SearchBar onSearch={handleSearch} />
            <ActionButtons
              onAdd={() => console.log("Add New")}
              onImport={() => console.log("Import")}
              onHelp={() => console.log("Help")}
            />
          </div>
        )}
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4">
        <FilterBar filtersConfig={filtersConfig} />
        <ExportSettingsBar />
      </div>

      {type === "table" ? (
        <>

          <div className="overflow-x-auto">
            <DataTable columns={columns} data={filteredData} />
          </div>

          <Pagination
            currentPage={currentPage}
            totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            onPerPageChange={(size) => setItemsPerPage(size)}
          />
        </>
      ) : (
        <>
          {children ? (
            children
          ) : (
            <div className="text-gray-500 text-sm">No content available.</div>
          )}
        </>
      )}
    </div>
  );
}
