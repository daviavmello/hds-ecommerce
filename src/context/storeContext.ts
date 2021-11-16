import { createContext, useContext } from "react";

export interface IStoreContext {
  colorMode: string;
  setColorMode: (colorMode: string) => void;
  badRequest: boolean;
  setBadRequest: (badRequest: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const StoreContext = createContext<IStoreContext>({
  colorMode: "light",
  setColorMode: (colorMode: string) => colorMode,
  badRequest: false,
  setBadRequest: (badRequest: boolean) => badRequest,
  loading: true,
  setLoading: (loading: boolean) => loading,
});
export const useStore = () => useContext(StoreContext);
