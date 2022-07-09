import { createContext, useState, useContext } from "react";

export const CookieContext = createContext();
export const CookieUpdate = createContext();

export function useCookie() {
  return useContext(CookieContext);
}

export function useCookieUpdate() {
  return useContext(CookieUpdate);
}
const CookieProvider = ({ children }) => {
  const [acceptCookie, setAcceptCookie] = useState(false);

  const setCookie = () => {
    setAcceptCookie(!acceptCookie);
  };
  return (
    <CookieContext.Provider value={acceptCookie}>
      <CookieUpdate.Provider value={setCookie}>
        {children}
      </CookieUpdate.Provider>
    </CookieContext.Provider>
  );
};

export default CookieProvider;
