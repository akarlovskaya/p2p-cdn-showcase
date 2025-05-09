"use client";

import useClientData from "../../lib/api/client";

export default function ClientPage() {
  const { data, isLoading } = useClientData();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client Dashboard</h1>
      {/* Render client data */}
    </div>
  );
}
