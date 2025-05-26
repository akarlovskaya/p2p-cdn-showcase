"use client";
import { useSidebar } from "../lib/contexts/sidebar-context";
import SidebarItems from "./SidebarItems";
import Image from "next/image";
import RoleSelector from "./RoleSelector";

type ClientSidebarProps = {
  role?: string;
  username?: string;
};

export default function ClientSidebar({ role, username }: ClientSidebarProps) {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Overlay for mobile to close sidebar*/}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <div className="flex w-64 flex-col">
          <div className="flex h-16 flex-shrink-0 items-center px-4 border-b">
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              alt="P2P CDN Logo"
            />
            <h2 className="text-lg font-semibold ml-2">P2P CDN</h2>
          </div>
          <SidebarItems role={role} username={username} />
        </div>
        <RoleSelector />
      </aside>
    </>
  );
}
