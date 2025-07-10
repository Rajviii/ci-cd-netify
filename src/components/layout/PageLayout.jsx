import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function PageLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar onToggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        {showSidebar && (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            <div
              className="fixed inset-0 bg-black opacity-40"
              onClick={() => setShowSidebar(false)}
            ></div>
            <div className="relative z-50 w-64 bg-white shadow-lg h-full">
              <Sidebar />
            </div>
          </div>
        )}
        <main className="flex-1 overflow-y-auto bg-white-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
