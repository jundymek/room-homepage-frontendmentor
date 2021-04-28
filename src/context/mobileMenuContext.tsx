import * as React from "react";

type MobileMenuProviderProps = { children: React.ReactNode };

const MobileMenuContext = React.createContext<
  | {
      isMobileMenuOpen: boolean;
      setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function MobileMenuProvider({ children }: MobileMenuProviderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const value = { isMobileMenuOpen, setIsMobileMenuOpen };
  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

function useMobileMenu() {
  const context = React.useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }
  return context;
}

export { MobileMenuProvider, useMobileMenu };
