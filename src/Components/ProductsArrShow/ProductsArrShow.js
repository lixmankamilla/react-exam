import "./ProductsArrShow.scss";
import { useContext, useState } from "react";
import { ProductContext } from "../ProductsContext/ProductContext";
import { AddToCartBtn } from "../AddToCartBtn/AddToCartBtn";
import { Link } from "react-router-dom";

export const ProductsArrShow = () => {
  const { products, setProducts } = useContext(ProductContext);
  return products.map((product) => {
    return (
      <div className="products-wrapper__blocks__block" key={product.id}>
        <Link className="products-arr-link" to={"/product/" + product.id}>
          <div className="products-wrapper__blocks__block__img">
            <img src={product.img} width="260px" height="208px" />
          </div>
          <div className="products-wrapper__blocks__block__desc">
            <div className="products-wrapper__blocks__block__desc__title">
              {product.descr}
            </div>
            <div className="products-wrapper__blocks__block__desc__price__block">
              <span className="products-wrapper__blocks__block__desc__price__block__sum">
                {product.price}
              </span>
              <span className="products-wrapper__blocks__block__desc__price__block__currency">
                ₽
              </span>
            </div>
          </div>
        </Link>
        <AddToCartBtn id={product.id} />
      </div>
    );
  });
};
