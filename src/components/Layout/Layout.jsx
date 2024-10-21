import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />

            <ScrollToTopButton />
        </>
    );
};

export default Layout;
