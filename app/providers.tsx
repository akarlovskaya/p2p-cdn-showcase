"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./lib/contexts/auth-context";
import { SidebarProvider } from "./lib/contexts/sidebar-context";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for clearer debugging
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
