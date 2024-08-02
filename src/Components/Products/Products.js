import "../../Components/Products/Products.scss";
import { ProductsArrShow } from "../ProductsArrShow/ProductsArrShow";

export const Products = () => {
  return (
    <div className="products-wrapper">
      <div className="products-wrapper__title">Популярные товары</div>
      <div className="products-wrapper__blocks">
        <ProductsArrShow />
      </div>
    </div>
  );
};
