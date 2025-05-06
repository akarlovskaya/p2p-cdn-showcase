// Shared layout for all dashboard pages (dashboard-specific layout)
import {
  FiHome,
  FiGlobe,
  FiActivity,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
//import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Similar to my previous component but adapted for Server Components */}
      <aside className="hidden md:flex md:flex-shrink-0">
        <div className="flex w-64 flex-col">
          <div className="flex h-16 flex-shrink-0 items-center px-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">P2P CDN</h2>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              <SidebarItem
                href="/dashboard"
                icon={<FiHome />}
                text="Dashboard"
              />
              <SidebarItem
                href="/dashboard/nodes"
                icon={<FiGlobe />}
                text="Nodes"
              />
              <SidebarItem
                href="/dashboard/performance"
                icon={<FiActivity />}
                text="Performance"
              />
              <SidebarItem
                href="/dashboard/users"
                icon={<FiUsers />}
                text="Users"
              />
              <SidebarItem
                href="/dashboard/settings"
                icon={<FiSettings />}
                text="Settings"
              />
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarItem({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
      >
        <span className="mr-3">{icon}</span>
        <span>{text}</span>
      </a>
    </li>
  );
}
