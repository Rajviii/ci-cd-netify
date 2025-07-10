import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className="pt-16 md:ml-64 p-6 bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}
