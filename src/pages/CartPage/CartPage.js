import { CartArrayContextProvider } from "../../Components/CartArrayContext/CartArrayContextProvider/CartArrayContextProvider";
import { CartSlider } from "../../Components/CartSlider/CartSlider";
import { ProductsInCart } from "../../Components/ProductsInCart/ProductsInCart";

export const Cart = () => {
  return (
    <>
      <CartArrayContextProvider>
        <CartSlider />
        <ProductsInCart />
      </CartArrayContextProvider>
    </>
  );
};
