import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PROFILE, NAV_ITEMS } from "@/utils/portfolio";

type PortfolioContextValue = {
  profile: typeof PROFILE;
  nav: typeof NAV_ITEMS;
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);

  const value = useMemo<PortfolioContextValue>(
    () => ({ profile: PROFILE, nav: NAV_ITEMS, contactOpen, setContactOpen }),
    [contactOpen],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
}
