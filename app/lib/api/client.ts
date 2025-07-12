"use client";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/auth-context";

export async function fetchOverviewData() {
  // console.log("Fetch function executing"); // Debug 1

  try {
    const res = await fetch("/api/overview/");
    // console.log("Response status:", res.status); // Debug 2

    if (!res.ok) {
      console.error("Response not OK:", await res.text());
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    // console.log("Parsed data from client:", data); // Debug 3
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}

export default function useClientData() {
  const { user } = useAuth(); // Destructure to avoid hook calls in render
  console.log("fetchOverviewData", fetchOverviewData());

  return useQuery({
    queryKey: ["client-data", user?.role],
    queryFn: fetchOverviewData,
    enabled: user?.role === "client",
    //refetchOnMount: true, // Add this line
    //enabled: true, // ← Force enable for testing
  });
}
