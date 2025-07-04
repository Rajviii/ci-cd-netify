import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const sidebarData = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Work Order', path: '/work-order' },
  { label: 'Project', path: '/project' },
  { label: 'Settings', path: '/settings' },
  { label: 'Logout', path: '/logout' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 focus:outline-none z-50"
      >
        {isOpen ? (
          <FiX className="h-6 w-6 text-gray-700" />
        ) : (
          <FiMenu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <div className="p-6 text-xl font-semibold border-b border-gray-200">
          Facil-IT
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {sidebarData.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="text-gray-700 hover:bg-gray-100 p-2 rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
