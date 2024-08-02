import { CategoriesContext } from "../CategoriesContext";
import { useState } from "react";

export const CategoriesContextProvider = ({ children }) => {
  const [category, setStateCategory] = useState("Все");
  return (
    <>
      <CategoriesContext.Provider value={{ category, setStateCategory }}>
        {children}
      </CategoriesContext.Provider>
    </>
  );
};
