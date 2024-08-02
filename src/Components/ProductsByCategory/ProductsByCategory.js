import { useContext } from "react";
import "./ProductsByCategory.scss";
import { ProductContext } from "../ProductsContext/ProductContext";
import { CategoriesContext } from "../CategoriesContext/CategoriesContext";
import { Link } from "react-router-dom";

export const ProductsByCategory = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { category, setStateCategory } = useContext(CategoriesContext);
  return (
    <div className="products-blocks-wrapper">
      {products.map((product) => {
        if (product.category == category) {
          return (
            <Link
              className="products-by-cat-link"
              to={"/product/" + product.id}
            >
              <div className="products-blocks-wrapper__block" key={product.id}>
                <div className="products-blocks-wrapper__block__img">
                  <img src={product.img} width="278px" height="208px" />
                </div>
                <div className="products-blocks-wrapper__block__desc">
                  <div className="products-blocks-wrapper__block__desc__title">
                    {product.descr}
                  </div>
                  <div className="products-blocks-wrapper__block__desc__price__block">
                    <span className="products-blocks-wrapper__block__desc__price__block__sum">
                      {product.price}
                    </span>
                    <span className="products-blocks-wrapper__block__desc__price__block__currency">
                      ₽
                    </span>
                  </div>
                  <button className="products-blocks-wrapper__block__desc__cart__btn">
                    В корзину
                  </button>
                </div>
              </div>
            </Link>
          );
        } else if (category === "Все") {
          return (
            <Link
              className="products-by-cat-link"
              to={"/product/" + product.id}
            >
              <div className="products-blocks-wrapper__block" key={product.id}>
                <div className="products-blocks-wrapper__block__img">
                  <img src={product.img} width="278px" height="208px" />
                </div>
                <div className="products-blocks-wrapper__block__desc">
                  <div className="products-blocks-wrapper__block__desc__title">
                    {product.descr}
                  </div>
                  <div className="products-blocks-wrapper__block__desc__price__block">
                    <span className="products-blocks-wrapper__block__desc__price__block__sum">
                      {product.price}
                    </span>
                    <span className="products-blocks-wrapper__block__desc__price__block__currency">
                      ₽
                    </span>
                  </div>
                  <button className="products-blocks-wrapper__block__desc__cart__btn">
                    В корзину
                  </button>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};
