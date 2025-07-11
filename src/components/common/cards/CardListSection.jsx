
import SectionFilterBar from "../SectionFilterBar";
import SectionTabs from "../SectionTabs";
import ActivityCard from "./ActivityCard";
import { HiOutlineRefresh } from "react-icons/hi";

export default function CardListSection({ title, tabs, selectedTab, onTabChange, filters, onFilterChange, onRefresh, data }) {
  return (
    <div className="bg-white rounded shadow-sm border border-gray-200 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <SectionFilterBar filters={filters} onChange={onFilterChange} />
          <button onClick={onRefresh} className="p-2 rounded     hover:bg-gray-100">
            <HiOutlineRefresh className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <SectionTabs tabs={tabs} activeTab={selectedTab} onTabChange={onTabChange} />

      <div className="space-y-4">
        {data.map((item) => (
          <ActivityCard key={item.id} activity={item} />
        ))}
      </div>
    </div>
  );
}
