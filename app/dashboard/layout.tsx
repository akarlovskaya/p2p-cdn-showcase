// Shared layout for all dashboard pages (dashboard-specific layout)
import { SidebarProvider } from "../contexts/SidebarContext";
import { Header } from "../components/header/Header";
import ClientSidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <ClientSidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
