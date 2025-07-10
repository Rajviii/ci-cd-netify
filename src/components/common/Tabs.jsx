import { useState } from "react";

export default function Tabs({ tabs, onTabChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex mb-4 space-x-6 pt-3 text-sm font-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`pb-2 ${
            activeTab === tab
              ? "border-b-2 border-indigo-500 text-black-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
