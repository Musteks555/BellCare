import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

import Layout from "../Layout/Layout";
import SharedLayout from "../SharedLayout/SharedLayout";

const Home = lazy(() => import("../../pages/Home/Home"));

function App() {
    return (
        <Layout>
            <SharedLayout>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </SharedLayout>
        </Layout>
    );
}

export default App;
