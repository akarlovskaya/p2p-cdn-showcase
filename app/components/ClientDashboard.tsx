"use client";
import { useAuth } from "../lib/contexts/auth-context";
import useClientData from "../lib/api/client";

export default function ClientDashboard() {
  //const { role } = useAuth();
  const { data } = useClientData();

  return (
    <div>
      <h1>Client Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
