import { createContext, useState, useContext } from "react";

export const SubscribeContext = createContext();
export const SubscribeUpdate = createContext();

export function useSubscribe() {
  return useContext(SubscribeContext);
}

export function useSubscribeUpdate() {
  return useContext(SubscribeUpdate);
}
const SubscribeProvider = ({ children }) => {
  const [acceptSubscribe, setAcceptSubscribe] = useState(false);

  const setSubscribe = () => {
    setAcceptSubscribe(!acceptSubscribe);
  };
  
  return (
    <SubscribeContext.Provider value={acceptSubscribe}>
      <SubscribeUpdate.Provider value={setSubscribe}>
        {children}
      </SubscribeUpdate.Provider>
    </SubscribeContext.Provider>
  );
};

export default SubscribeProvider;
