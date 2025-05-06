import {
  FiX,
  FiHome,
  FiGlobe,
  FiActivity,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-md transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">P2P CDN</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar content */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              <SidebarItem
                href="/"
                icon={<FiHome className="h-5 w-5" />}
                text="Dashboard"
              />
              <SidebarItem
                href="/nodes"
                icon={<FiGlobe className="h-5 w-5" />}
                text="CDN Nodes"
              />
              <SidebarItem
                href="/performance"
                icon={<FiActivity className="h-5 w-5" />}
                text="Performance"
              />
              <SidebarItem
                href="/users"
                icon={<FiUsers className="h-5 w-5" />}
                text="Users"
              />
              <SidebarItem
                href="/settings"
                icon={<FiSettings className="h-5 w-5" />}
                text="Settings"
              />
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t">
            <div className="text-sm text-gray-500">v1.0.0</div>
          </div>
        </div>
      </aside>
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
        className="flex items-center px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
      >
        <span className="mr-3">{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
}
