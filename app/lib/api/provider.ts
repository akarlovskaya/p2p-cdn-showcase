"use client";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/auth-context";

async function fetchProviderStatData() {
  // console.log("Fetch function executing"); // Debug 1

  try {
    const res = await fetch("/api/providerStat");
    // console.log("Response status from provider:", res.status); // Debug 2

    if (!res.ok) {
      console.error("Response not OK:", await res.text());
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    // console.log("Parsed data:", data); // Debug 3
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export default function useProviderData() {
  const { user } = useAuth(); // Destructure to avoid hook calls in render
  // console.log("fetchOverviewData", fetchProviderStatData());

  return useQuery({
    queryKey: ["provider-data"],
    queryFn: fetchProviderStatData,
    enabled: user?.role === "provider",
    //refetchOnMount: true, // Add this line
    //enabled: true, // ← Force enable for testing
  });
}
