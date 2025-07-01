"use client";

import { createContext, useContext } from "react";
import type { User } from "@/types/user";

interface UserContextType {
  user: User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
  user,
  children,
}: {
  user?: User;
  children: React.ReactNode;
}) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = (): User => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  if (!context.user) {
    throw new Error("User is undefined in UserProvider");
  }
  return context.user;
};
