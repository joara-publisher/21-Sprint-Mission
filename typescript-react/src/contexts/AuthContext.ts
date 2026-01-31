import type { SignInValues, User } from "@/types/auth";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  isPending: boolean;
  login: (data: SignInValues) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
