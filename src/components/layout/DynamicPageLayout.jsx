import Tabs from "../common/Tabs";
import SearchBar from "../common/SearchBar";
import ActionButtons from "../common/ActionButtons";
import FilterBar from "../common/FilterBar";
import ExportSettingsBar from "../common/ExportSettingsBar";
import DataTable from "../common/DataTable";
import Pagination from "../common/Pagination";
import { useState } from "react";

export default function DynamicPageLayout({ tabs, columns, data, type, filtersConfig = [] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleSearch = (query) => setSearchQuery(query);
    const handleTabChange = (tab) => console.log("Tab selected:", tab);

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="bg-white min-h-screen px-6 py-4 space-y-4">
            {/* Tabs + Search + Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <Tabs tabs={tabs} onTabChange={handleTabChange} />
                <div className="flex items-center gap-4">
                    <SearchBar onSearch={handleSearch} />
                    <ActionButtons
                        onAdd={() => console.log("Add New")}
                        onImport={() => console.log("Import")}
                        onHelp={() => console.log("Help")}
                    />
                </div>
            </div>

            {/* Filters + Export */}
            <div className="flex justify-between items-center flex-wrap gap-4">
                <FilterBar filtersConfig={filtersConfig}/>
                <ExportSettingsBar />
            </div>

            {type === "table" && (
                <>
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <DataTable columns={columns} data={filteredData} />
                    </div>

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalItems={filteredData.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={(page) => setCurrentPage(page)}
                        onPerPageChange={(size) => setItemsPerPage(size)}
                    />
                </>
            )}
        </div>
    );
}
