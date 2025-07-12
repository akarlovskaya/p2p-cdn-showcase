"use client";
import { useAuth } from "../lib/contexts/auth-context";
import { Header } from "../components/header/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

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
