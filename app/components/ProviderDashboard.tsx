"use client";
import useProviderData from "../lib/api/provider";

export default function ProviderDashboard() {
  const { data } = useProviderData();

  return (
    <div className="text-gray-800">
      <h1>Provider Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
