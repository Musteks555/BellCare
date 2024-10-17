import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <>
            <Header />

            <main>{loading ? <Loader /> : children}</main>

            <Footer />
        </>
    );
};

export default Layout;
