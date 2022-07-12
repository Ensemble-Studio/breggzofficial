import { createContext, useState, useContext } from "react";

export const AnimationContext = createContext();
export const AnimationUpdate = createContext();

export function useAnimationIntro() {
  return useContext(AnimationContext);
}

export function useAnimationUpdate() {
  return useContext(AnimationUpdate);
}

const AnimationProvider = ({ children }) => {
  const [startAnimation, setStartAnimation] = useState(true);

  const stateAnimation = () => {
    setStartAnimation(!startAnimation);
  };
  
  return (
    <AnimationContext.Provider value={startAnimation}>
      <AnimationUpdate.Provider value={stateAnimation}>
        {children}
      </AnimationUpdate.Provider>
    </AnimationContext.Provider>
  );
};

export default   AnimationProvider;
