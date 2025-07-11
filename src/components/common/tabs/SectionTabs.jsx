export default function SectionTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex items-center gap-4 text-sm font-medium text-gray-600 border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(tab.key)}
          className={`pb-2 border-b-2 ${activeTab === tab.key ? 'border-blue-500 text-blue-600' : 'border-transparent hover:text-blue-500'}`}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-1 bg-gray-100 px-2 py-0.5 text-xs rounded">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}
