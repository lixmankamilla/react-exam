import { CountProductContext } from "../CountProductsContext/CountProductContext";
import { ProductIdContext } from "../ProductIdContext/ProductIdContext";
import "./AddToCartBtn.scss";
import { useContext, useState } from "react";

export const AddToCartBtn = ({ id }) => {
  const { productId, setProductId } = useContext(ProductIdContext);
  const [active, setStateActive] = useState(true);
  const { count, setStateCount } = useContext(CountProductContext);
  return (
    <>
      {active ? (
        <button
          className="products-wrapper__blocks__block__desc__cart__btn"
          onClick={() => {
            setStateActive(false);
          }}
        >
          В корзину
        </button>
      ) : (
        <div className="products-wrapper__blocks__block__desc__add-product__input">
          <div className="products-wrapper__blocks__block__desc__add-product__input__1">
            <button
              className="products-wrapper__blocks__block__desc__add-product__input__1__plus-btn"
              onClick={() => {
                setStateCount((prevState) => {
                  const newState = prevState + 1;
                  return newState;
                });
              }}
            >
              +
            </button>
            <div className="products-wrapper__blocks__block__desc__add-product__input__1__count">
              {count}
            </div>
            <button
              className="products-wrapper__blocks__block__desc__add-product__input__1__minus-btn"
              onClick={() => {
                setStateCount((prevState) => {
                  if (prevState === 0) {
                    return prevState;
                  } else {
                    const newState = prevState - 1;
                    return newState;
                  }
                });
              }}
            >
              -
            </button>
          </div>
          <button
            className="products-wrapper__blocks__block__desc__add-product__input__2"
            onClick={() => {
              setStateActive(true);
              setProductId(id);
            }}
          ></button>
        </div>
      )}
    </>
  );
};
