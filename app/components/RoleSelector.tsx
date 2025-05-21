"use client";
import { useAuth } from "../lib/contexts/auth-context";

export default function RoleSelector() {
  const { role, setRole } = useAuth();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
      <p className="mb-2 ">Current role: {role || "none"}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setRole("client")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Client
        </button>
        <button
          onClick={() => setRole("provider")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Provider
        </button>
      </div>
    </div>
  );
}
