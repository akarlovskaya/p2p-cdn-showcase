// Shared layout for all dashboard pages (dashboard-specific layout)

"use client";
import { useAuth } from "../lib/contexts/auth-context";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "../components/header/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Extract role and username from URL
  const pathParts = pathname.split("/");
  const urlRole = pathParts[2];
  const urlUsername = pathParts[4];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role={user?.role} username={user?.username} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
