import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import CartPage from "./pages/CartPage";


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products/all" element={<ProductsPage  type='all'/>} />
        <Route path="/products/sales" element={<ProductsPage type='sale'/>} />
        <Route path="/category/:id" element={<ProductsPage type='category' />} />
        <Route path="/products/:id" element={<ProductInfoPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
