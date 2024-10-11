import { createContext, ReactNode, useState, useContext } from "react";

interface AppProviderProps {
  bgImageUrl: string;
  setBgImageUrl: (url: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const AppContext = createContext<AppProviderProps>({
  bgImageUrl: "",
  setBgImageUrl: () => {},
  loading: false,
  setLoading: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [bgImageUrl, setBgImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ bgImageUrl, setBgImageUrl, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
