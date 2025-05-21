"use client";
import useProviderData from "../lib/api/provider";

export default function ProviderDashboard() {
  const { data } = useProviderData();

  return (
    <div>
      <h1>Provider Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
