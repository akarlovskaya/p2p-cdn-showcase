"use client";
import { useAuth } from "../lib/contexts/auth-context";
import { useRouter } from "next/navigation";

export default function RoleSelector() {
  const router = useRouter();
  const { login } = useAuth();

  const handleRoleSelect = async (role: string, username: string) => {
    await login(username, role);
    // await queryClient.invalidateQueries();
    router.push(`/dashboard/${role}/overview/${username}`);
    // setTimeout(() => router.refresh(), 100);
    // window.location.href = `/dashboard/${role}/overview/${username}`;
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="mb-2 text-dark-light text-center">Select Demo Role</h3>
      <div className="flex gap-2">
        <button
          onClick={() => handleRoleSelect("client", "patrick-simpson")}
          className="px-3 py-1 bg-primary-dark text-white rounded"
        >
          Client
        </button>
        <button
          onClick={() => handleRoleSelect("provider", "patrick-simpson")}
          className="px-3 py-1 bg-secondary-dark text-white rounded"
        >
          Provider
        </button>
      </div>
    </div>
  );
}
