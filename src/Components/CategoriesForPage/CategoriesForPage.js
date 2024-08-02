import { CategoriesContext } from "../CategoriesContext/CategoriesContext";
import { ProductContext } from "../ProductsContext/ProductContext";
import "./CategoriesForPage.scss";
import { useContext } from "react";
import { useState } from "react";

export const CategoriesForPage = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { category, setStateCategory } = useContext(CategoriesContext);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  uniqueCategories.unshift("Все");

  const handleClick = (category) => {
    setStateCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="categories-block">
      {uniqueCategories.map((category) => {
        return (
          <div
            className={`categories-block__category ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => handleClick(category)}
            key={category}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};
