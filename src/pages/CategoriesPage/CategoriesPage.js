import "./CategoriesPage.scss";
import { CategoriesForPage } from "../../Components/CategoriesForPage/CategoriesForPage";
import { ProductsByCategory } from "../../Components/ProductsByCategory/ProductsByCategory";
import { CategoriesContextProvider } from "../../Components/CategoriesContext/CategoryContextProvider/CategoriesContextProvider";
export const Categories = () => {
  return (
    <div className="categories-page-wrapper">
      <CategoriesContextProvider>
        <CategoriesForPage />
        <ProductsByCategory />
      </CategoriesContextProvider>
    </div>
  );
};
