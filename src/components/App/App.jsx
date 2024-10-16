import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

import Layout from "../Layout/Layout";
import SharedLayout from "../SharedLayout/SharedLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Categories = lazy(() => import("../../pages/Categories/Categories"));
const Brands = lazy(() => import("../../pages/Brands/Brands"));
const Manufacturers = lazy(() => import("../../pages/Manufacturers/Manufacturers"));
const WhoWeAre = lazy(() => import("../../pages/WhoWeAre/WhoWeAre"));
const ContactUs = lazy(() => import("../../pages/ContactUs/ContactUs"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {
    return (
        <Layout>
            <SharedLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/manufacturers" element={<Manufacturers />} />
                    <Route path="/about" element={<WhoWeAre />} />
                    <Route path="/contacts" element={<ContactUs />} />
                    <Route path="/favorites" element={<Favorites />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </SharedLayout>
        </Layout>
    );
}

export default App;
