import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/admin/Dashboard";
// import Login from "./pages/admin/Login";
import ForgetPassword from "./pages/ForgetPassword";
import MainLayout from "./components/adminComponent/MainLayout";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/compare-products" element={<CompareProduct />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp/>} />
          {/* 
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
