import "./themes/global/global.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/MainPage/MainPage";
import { Cart } from "./pages/CartPage/CartPage";
import { Categories } from "./pages/CategoriesPage/CategoriesPage";
import { Product } from "./pages/ProductPage/ProductPage";
import { CountProductContextProvider } from "./Components/CountProductsContext/ContProductContextProvider/CountProductContextProvider";
import { ProductIdContextProvider } from "./Components/ProductIdContext/ProductIdContextProvider/ProductIdContextProvider";
import PageLayout from "./layouts/PageLayout/PageLayout";
import ContextProviderProducts from "./Components/ProductsContext/ContextProviderProducts/ContextProviderProducts";

function App() {
  return (
    <ContextProviderProducts>
      <CountProductContextProvider>
        <ProductIdContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route path="/" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/product/:id" element={<Product />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductIdContextProvider>
      </CountProductContextProvider>
    </ContextProviderProducts>
  );
}

export default App;
