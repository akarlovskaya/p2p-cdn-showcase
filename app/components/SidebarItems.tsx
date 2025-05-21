import {
  FiHome,
  FiGlobe,
  FiActivity,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";

export default function SidebarItems() {
  return (
    <>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          <SidebarItem href="/dashboard" icon={<FiHome />} text="Dashboard" />
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
      {/* Sidebar footer */}
      <div className="p-4 border-t">
        <div className="text-sm text-gray-500">v1.0.0</div>
      </div>
    </>
  );
}

type SidebarItemProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

function SidebarItem({ href, icon, text }: SidebarItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center px-4 py-2 hover:bg-primary-50 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full"
      >
        <span className="mr-3">{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
}
