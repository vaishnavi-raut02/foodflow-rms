import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
};

type AuthContextType = {
  user: UserType | null;

  login: (userData: UserType) => void;

  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<UserType | null>(null);

  const login = (userData: UserType) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}