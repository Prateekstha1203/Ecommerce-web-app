import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./components/MainLayout";


//Blog 
import BlogList from "./pages/Blog/BlogList";
import AddBlog from "./pages/Blog/AddBlog";
import AddBlogCategory from "./pages/Blog/AddBlogCategory";
import BlogCategory from "./pages/Blog/BlogCategory";

//Slider Component
import Customers from "./pages/SliderPages/Customers";
import Dashboard from "./pages/SliderPages/Dashboard";
import Enquiries from "./pages/SliderPages/Enquiries";

//Order
import Order from "./pages/Order/Order";

//Coupon
import CouponList from "./pages/Coupon/CouponList";
import AddCoupon from "./pages/Coupon/AddCoupon";

//Catelog 
import ColorList from "./pages/Catalogs/Color/ColorList";
import AddColor from "./pages/Catalogs/Color/AddColor";
import AddBrand from "./pages/Catalogs/Brand/AddBrand";
import BrandsList from "./pages/Catalogs/Brand/BrandsList";
import CategoryList from "./pages/Catalogs/Category/CategoryList";
import AddCategory from "./pages/Catalogs/Category/AddCategory";
import ProductsList from "./pages/Catalogs/Product/ProductsList";
import Product from "./pages/Catalogs/Product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/admin" element={<MainLayout />}>

            <Route index element={<Dashboard />} /> 
            <Route path="customers" element={<Customers />} />
            <Route path="enquiries" element={<Enquiries />} />

            <Route path="blog-list" element={<BlogList />} />
            <Route path="blog" element={<AddBlog />} />
            <Route path="blog-category-list" element={<BlogCategory />} />
            <Route path="blog-category" element={<AddBlogCategory />} />

            <Route path="brand-list" element={<BrandsList />} />
            <Route path="brand" element={<AddBrand />} />
            <Route path="category-list" element={<CategoryList />} />
            <Route path="category" element={<AddCategory />} />
            <Route path="color-list" element={<ColorList />} />
            <Route path="color" element={<AddColor />} />
            <Route path="product-list" element={<ProductsList />} />
            <Route path="product" element={<Product />} />

            <Route path="coupon-list" element={<CouponList />} />
            <Route path="coupon" element={<AddCoupon />} />

            <Route path="orders" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}






export default App;
