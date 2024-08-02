import { useState } from "react";
import { CartArrayContext } from "../CartArrayContext";

export const CartArrayContextProvider = ({ children }) => {
  const [cart, setStateCart] = useState([]);
  return (
    <CartArrayContext.Provider value={{ cart, setStateCart }}>
      {children}
    </CartArrayContext.Provider>
  );
};
