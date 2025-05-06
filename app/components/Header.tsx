"use client";
import { FiMenu, FiBell, FiUser } from "react-icons/fi";
import { useSidebar } from "../hooks/use-sidebar";

export function Header() {
  //const { toggle } = useSidebar();

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={useSidebar}
            className="mr-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">
            P2P CDN Dashboard
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full">
            <FiBell className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
              <FiUser className="h-5 w-5 text-primary-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
