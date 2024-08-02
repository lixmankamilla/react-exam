import { useState } from "react";
import { ProductIdContext } from "../ProductIdContext";

export const ProductIdContextProvider = ({ children }) => {
  const [productId, setProductId] = useState();
  return (
    <ProductIdContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductIdContext.Provider>
  );
};
