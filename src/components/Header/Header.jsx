import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

import Container from "../Container/Container";

import logo from "../../images/logo.svg";

import css from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <header className={css.header}>
            <Container>
                <div className={css.headerContainer}>
                    <button type="button" className={css.headerBurgerBtn} onClick={toggleMenu}>
                        <RxHamburgerMenu className={css.headerBurgerIcon} color="157DC7" />
                    </button>

                    <Link to={"/"} className={css.headerLogo}>
                        <img src={logo} alt="logo" className={css.headerLogoImage} />
                    </Link>

                    <nav className={css.headerNav}>
                        <ul className={css.headerNavList}>
                            <li className={css.headerNavItem}>
                                <Link to="/categories" className={css.headerNavLink}>
                                    Categories
                                </Link>
                            </li>

                            <li className={css.headerNavItem}>
                                <Link to="/brands" className={css.headerNavLink}>
                                    Brands
                                </Link>
                            </li>

                            <li className={css.headerNavItem}>
                                <Link to="/manufacturers" className={css.headerNavLink}>
                                    Manufacturers
                                </Link>
                            </li>

                            <li className={css.headerNavItem}>
                                <Link to="/about" className={css.headerNavLink}>
                                    About us
                                </Link>
                            </li>

                            <li className={css.headerNavItem}>
                                <Link to="/contacts" className={css.headerNavLink}>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Link to={"/favorites"} className={css.headerFavorites}>
                        <FaRegHeart className={css.headerFavoritesIcon} color="157DC7" />

                        <div className={css.headerFavoritesQuantityContainer}>
                            <p className={css.headerFavoritesQuantity}>0</p>
                        </div>
                    </Link>
                </div>

                <div className={css.headerSearchContainer}>
                    <input type="text" className={css.headerSearchInput} placeholder="Search" />

                    <BiSearchAlt className={css.headerSearchIcon} color="157DC7" />
                </div>
            </Container>

            <div className={`${css.headerSideMenu} ${isMenuOpen ? css.headerSideMenuOpen : ""}`}>
                <button type="button" className={css.headerSideMenuCloseBtn} onClick={closeMenu}>
                    <RxCross2 className={css.headerSideMenuCloseIcon} color="157DC7" />
                </button>

                <Link to={"/"}>
                    <img src={logo} alt="logo" className={css.headerSideMenuLogoImage} />
                </Link>

                <nav className={css.headerSideMenuNav}>
                    <ul className={css.headerSideMenuList}>
                        <li className={css.headerSideMenuItem}>
                            <Link to="/categories" className={css.headerSideMenuLink}>
                                Categories
                            </Link>
                        </li>

                        <li className={css.headerSideMenuItem}>
                            <Link to="/brands" className={css.headerSideMenuLink}>
                                Brands
                            </Link>
                        </li>

                        <li className={css.headerSideMenuItem}>
                            <Link to="/manufacturers" className={css.headerSideMenuLink}>
                                Manufacturers
                            </Link>
                        </li>

                        <li className={css.headerSideMenuItem}>
                            <Link to="/about" className={css.headerSideMenuLink}>
                                About us
                            </Link>
                        </li>

                        <li className={css.headerSideMenuItem}>
                            <Link to="/contacts" className={css.headerSideMenuLink}>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={css.headerSideMenuContactsContainer}>
                    <div className={css.headerSideMenuContacts}>
                        <BsFillTelephoneFill color="157DC7" className={css.headerSideMenuContactsIcon} />

                        <a href="tel:+12489737534" className={css.headerSideMenuContactsText} target="_blank" rel="noreferrer">
                            +1 248 973 7534
                        </a>
                    </div>

                    <div className={css.headerSideMenuContacts}>
                        <IoMail color="157DC7" className={css.headerSideMenuContactsIcon} />

                        <a
                            href="mailto:hello@bellcare-line.com"
                            className={css.headerSideMenuContactsText}
                            target="_blank"
                            rel="noreferrer"
                        >
                            hello@bellcare-line.com
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
