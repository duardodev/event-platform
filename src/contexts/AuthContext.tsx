import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (data: boolean) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
