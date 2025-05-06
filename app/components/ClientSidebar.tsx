"use client";
import SidebarItems from "./SidebarItems";

export default function ClientSidebar() {
  return (
    <aside className="hidden md:flex md:flex-shrink-0">
      <div className="flex w-64 flex-col">
        <div className="flex h-16 flex-shrink-0 items-center px-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">P2P CDN</h2>
        </div>
        <SidebarItems />
      </div>
    </aside>
  );
}
