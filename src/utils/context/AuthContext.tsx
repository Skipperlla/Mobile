import { useState, useEffect, createContext, ReactNode, useMemo } from "react";
import { getStorage, removeStorage } from "@utils/storage";

interface IAuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider: React.FC<ReactNode> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    getStorage("accessToken").then(async (token: string) => {
      if (token) {
        setAccessToken(token);
        setIsLoggedIn(true);
        // await getStorage("me").then((data) => setMe(data));
      }
    });
    // removeStorage("accessToken");
    // removeStorage("me");
  }, []);
  const memoedValue = useMemo<IAuthContextProps>(
    () => ({
      accessToken,
      isLoggedIn,
      setIsLoggedIn,
      setAccessToken,
      index,
      setIndex,
    }),
    [accessToken, isLoggedIn, setIsLoggedIn, index, setIndex]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
