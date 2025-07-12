"use client";
import { useAuth } from "../lib/contexts/auth-context";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen">
      {!user && (
        <div className="flex items-center justify-center h-screen">
          <p>Please select a role first</p>
        </div>
      )}
    </div>
  );
}
