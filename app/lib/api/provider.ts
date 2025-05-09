"use client";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/auth-context";

export default function useProviderStats() {
  return useQuery({
    queryKey: ["provider-stats"],
    queryFn: async () => {
      const response = await fetch("/api/provider");
      return response.json();
    },
    enabled: useAuth().role === "provider",
  });
}
