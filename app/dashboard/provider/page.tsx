"use client";
import useProviderStats from "../../lib/api/provider";

export default function ProviderPage() {
  const { data, isLoading } = useProviderStats();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Provider Dashboard</h1>
      {/* Render client data */}
    </div>
  );
}
