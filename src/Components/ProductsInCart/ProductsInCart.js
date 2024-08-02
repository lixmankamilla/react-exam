import "./ProductsInCart.scss";
import productPlaceHolderImg from "../../assets/product-cart-placeholder-img.jpg";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductIdContext } from "../ProductIdContext/ProductIdContext";
import { ProductContext } from "../ProductsContext/ProductContext";
import { CartArrayContext } from "../CartArrayContext/CartArrayContext";
import { CountProductContext } from "../CountProductsContext/CountProductContext";

export const ProductsInCart = () => {
  const { products, setStateProduct } = useContext(ProductContext);
  const { count, setStateCount } = useContext(CountProductContext);
  const { cart, setStateCart } = useContext(CartArrayContext);
  const { productId, setProductId } = useContext(ProductIdContext);

  const addProductToCart = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      setStateCart((prevState) => [...prevState, product]);
    }
  };

  useEffect(() => {
    if (productId) {
      addProductToCart(productId);
      setProductId(null);
    }
  }, [productId]);

  console.log(cart);
  return (
    <div className="products-in-cart-wrapper">
      <div className="products-in-cart-wrapper__summary-block">
        <div className="products-in-cart-wrapper__summary-block__1">
          <div className="products-in-cart-wrapper__summary-block__1__total">
            Итого
          </div>
          <div className="products-in-cart-wrapper__summary-block__1__amount">
            <div className="products-in-cart-wrapper__summary-block__1__amount__text">
              Количество товара
            </div>

            <div className="products-in-cart-wrapper__summary-block__1__amount__num">
              3
            </div>
            <span className="products-in-cart-wrapper__summary-block__1__amount__num__txt">
              шт.
            </span>
          </div>

          <div className="products-in-cart-wrapper__summary-block__1__total-sum">
            <div className="products-in-cart-wrapper__summary-block__1__total-sum__text">
              Товаров на сумму
            </div>

            <div className="products-in-cart-wrapper__summary-block__1__total-sum__num">
              3160
            </div>
            <span className="products-in-cart-wrapper__summary-block__1__total-sum__num__txt">
              ₽
            </span>
          </div>
        </div>

        <div className="products-in-cart-wrapper__summary-block__2">
          <button className="products-in-cart-wrapper__summary-block__2__make-order-btn">
            Оформить заказ
          </button>
        </div>
      </div>

      {cart.map((product) => {
        <div className="products-in-cart-wrapper__products">
          <div className="products-in-cart-wrapper__products__product">
            <Link to={"/product/id" + product.id}>
              <div className="products-in-cart-wrapper__products__product__img">
                <img src={product.img} height="200px" />
              </div>
            </Link>
            <div className="products-in-cart-wrapper__products__product__add-product">
              <Link className="link" to={"/product/id" + product.id}>
                <div className="products-in-cart-wrapper__products__product__add-product__text">
                  {product.descr}
                </div>
              </Link>
              <div className="products-in-cart-wrapper__products__product__add-product__price">
                {product.price} ₽
              </div>
              <div className="products-in-cart-wrapper__products__product__add-product__input">
                <button className="products-in-cart-wrapper__products__product__add-product__input__plus-btn">
                  +
                </button>
                <div className="products-in-cart-wrapper__products__product__add-product__input__count">
                  99
                </div>
                <button className="products-in-cart-wrapper__products__product__add-product__input__minus-btn">
                  -
                </button>
              </div>
            </div>

            <div className="products-in-cart-wrapper__products__product__delete-product">
              <div className="products-in-cart-wrapper__products__product__delete-product__text">
                Код товара: <br /> 34078988-0047
              </div>
              <button className="products-in-cart-wrapper__products__product__delete-product__delete-btn">
                Удалить товар
              </button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};
