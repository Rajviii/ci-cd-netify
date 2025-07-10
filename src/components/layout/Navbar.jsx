import { useState, useEffect } from "react";
import {
  MdOutlineMenu
} from "react-icons/md";
import {
  FaRegQuestionCircle,
  FaRegUserCircle,
  FaPlay
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/SMG-Facilities-Logo.png";
import { FiSettings } from "react-icons/fi";

export default function Navbar({ onToggleSidebar }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="text-gray-700 hover:text-blue-600"
        >
          <MdOutlineMenu size={26} />
        </button>
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="flex items-center gap-4 text-gray-600 text-sm">
        <div className="hidden sm:flex items-center gap-1">
          <FaPlay className="text-blue-500" />
          <span className="text-red-500 text-xs">●</span>
          <span className="font-medium">{formatTime(seconds)}</span>
        </div>

        <button className="hover:text-blue-600" title="Help">
          <FaRegQuestionCircle size={18} />
        </button>

        <Link
          to="/settings"
          className="hover:text-blue-600"
          title="Settings"
        >
          <FiSettings size={22} />
        </Link>

        <Link
          to="/profile"
          className="hover:text-blue-600"
          title="Profile"
        >
          <FaRegUserCircle size={22} />
        </Link>
      </div>
    </header>
  );
}
