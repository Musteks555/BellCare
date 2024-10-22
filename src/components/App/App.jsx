import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

import Layout from "../Layout/Layout";
import SharedLayout from "../SharedLayout/SharedLayout";
import ScrollTop from "../ScrollTop/ScrollTop";

const Home = lazy(() => import("../../pages/Home/Home"));
const Categories = lazy(() => import("../../pages/Categories/Categories"));
const Brands = lazy(() => import("../../pages/Brands/Brands"));
const Manufacturers = lazy(() => import("../../pages/Manufacturers/Manufacturers"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Product = lazy(() => import("../../pages/Product/Product"));
const WhoWeAre = lazy(() => import("../../pages/WhoWeAre/WhoWeAre"));
const ContactUs = lazy(() => import("../../pages/ContactUs/ContactUs"));
const DeliveryInformation = lazy(() => import("../../pages/DeliveryInformation/DeliveryInformation"));
const Terms = lazy(() => import("../../pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("../../pages/PrivacyPolicy/PrivacyPolicy"));
const Faq = lazy(() => import("../../pages/Faq/Faq"));

function App() {
    return (
        <Layout>
            <SharedLayout>
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/manufacturers" element={<Manufacturers />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/about" element={<WhoWeAre />} />
                    <Route path="/contacts" element={<ContactUs />} />
                    <Route path="/delivery" element={<DeliveryInformation />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/faq" element={<Faq />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </SharedLayout>
        </Layout>
    );
}

export default App;
