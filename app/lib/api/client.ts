"use client";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/auth-context";

export default function useClientData() {
  return useQuery({
    queryKey: ["client-data"],
    queryFn: async () => {
      const response = await fetch("/api/client");
      return response.json();
    },
    enabled: useAuth().role === "client",
  });
}
