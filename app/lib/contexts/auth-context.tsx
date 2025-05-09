"use client";
import { createContext, useContext, ReactNode, useState } from "react";

type UserRole = "client" | "provider" | null;
type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
  // Add other auth-related state as needed
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>(null);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
