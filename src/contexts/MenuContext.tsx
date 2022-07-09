import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface MenuContextProps {
  menuIsOpen: boolean;
  setMenuIsOpen: (data: boolean) => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = menuIsOpen ? 'hidden' : 'auto';
  }, [menuIsOpen]);

  return (
    <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>{children}</MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
