"use client";

import { useQuery } from "@tanstack/react-query";

export default function TestQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: () => Promise.resolve("React Query is working!"),
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>{data}</div>;
}
