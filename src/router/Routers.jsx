import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/Search/SearchPage";
import SearchListing from "../pages/Search/SearchListing";
import Contact from "../pages/ContactUs";
import About from "../pages/AboutUs";
import Certificate from "../pages/Certificate/Certificate";
import Product from "../pages/Product/Product";
import Dashboard from "../pages/Dashboard/Dashboard";
import NoLayout from "../components/Layout/NoLayout";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Login";
import DashboardProducts from "../pages/Dashboard/DashboardProducts";
import DashboardSettings from "../pages/Dashboard/DashboardSettings";
import SignupForm from "../pages/SignupForm";
import PageNotFound from "../pages/error/PageNotFound";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/listing" element={<SearchListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/product" element={<Product />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
      <Route element={<NoLayout />} >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<DashboardProducts />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routers;
