import { useNavigate } from 'react-router-dom';
import { FiFileText, FiFolder, FiUsers, FiBox, FiMapPin, FiDollarSign, FiTruck, FiBarChart2 } from 'react-icons/fi';

export default function Home() {
  const navigate = useNavigate();

  const showComingSoon = (name) => {
    alert(`${name} module not designed yet.`);
  };

  const modules = [
    {
      name: 'Work Orders',
      icon: <FiFileText className="w-5 h-5 mr-2" />,
      path: '/work-order',
      active: true,
    },
    {
      name: 'Projects',
      icon: <FiFolder className="w-5 h-5 mr-2" />,
      path: '/project',
      active: true,
    },
    {
      name: 'Clients',
      icon: <FiUsers className="w-5 h-5 mr-2" />,
      active: false,
    },
    {
      name: 'Vendors',
      icon: <FiTruck className="w-5 h-5 mr-2" />,
      active: false,
    },
    {
      name: 'Accounting',
      icon: <FiDollarSign className="w-5 h-5 mr-2" />,
      active: false,
    },
    {
      name: 'Inventory',
      icon: <FiBox className="w-5 h-5 mr-2" />,
      active: false,
    },
    {
      name: 'Locations',
      icon: <FiMapPin className="w-5 h-5 mr-2" />,
      active: false,
    },
    {
      name: 'Reports',
      icon: <FiBarChart2 className="w-5 h-5 mr-2" />,
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">📊 CMMS Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map((module) => (
            <button
              key={module.name}
              onClick={() =>
                module.active
                  ? navigate(module.path)
                  : showComingSoon(module.name)
              }
              className={`flex items-center px-5 py-4 rounded-lg shadow-md border text-left transition ${
                module.active
                  ? 'bg-white hover:bg-blue-50 border-blue-200'
                  : 'bg-gray-100 cursor-not-allowed opacity-70'
              }`}
            >
              {module.icon}
              <span className="font-medium text-gray-800 text-sm">
                {module.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
