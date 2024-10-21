import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import css from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > window.innerHeight / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`${css.scrollToTopBtn} ${isVisible ? css.scrollToTopBtnVisible : ""}`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className={css.scrollToTopBtnIcon} />
        </button>
    );
};

export default ScrollToTopButton;
