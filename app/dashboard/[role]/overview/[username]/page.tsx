"use client";
import { useAuth } from "../../../../lib/contexts/auth-context";
import useClientData from "../../../../lib/api/client";
import useProviderData from "../../../../lib/api/provider";
import { useState } from "react";

export default function OverviewDashboard() {
  const { user } = useAuth();
  let fetchData;

  if (user?.role === "client") {
    fetchData = useClientData();
  } else if (user?.role === "provider") {
    fetchData = useProviderData();
  }

  return (
    <div>
      <h1>Overview Dashboard</h1>
      {user ? (
        <pre>{JSON.stringify(fetchData?.data, null, 2)}</pre>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
