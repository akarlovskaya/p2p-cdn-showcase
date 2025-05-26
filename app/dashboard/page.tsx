"use client";
import { useAuth } from "../lib/contexts/auth-context";
import ClientDashboard from "../components/ClientDashboard";
import ProviderDashboard from "../components/ProviderDashboard";
//import RoleSelector from "../components/RoleSelector";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen">
      {/* {role === "client" && <ClientDashboard />}
      {role === "provider" && <ProviderDashboard />} */}
      {!user && (
        <div className="flex items-center justify-center h-screen">
          <p>Please select a role first</p>
        </div>
      )}

      {/* <RoleSelector /> */}
    </div>
  );
}
