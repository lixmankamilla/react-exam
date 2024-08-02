import { CountProductContext } from "../CountProductContext";
import { useState } from "react";

export const CountProductContextProvider = ({ children }) => {
  const [count, setStateCount] = useState(0);
  return (
    <CountProductContext.Provider value={{ count, setStateCount }}>
      {children}
    </CountProductContext.Provider>
  );
};
