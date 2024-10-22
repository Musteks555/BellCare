import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { selectWishlist } from "../../redux/wishlist/selector";

import { FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

import { fetchSearchResults } from "../../api/header";

import Container from "../Container/Container";
import HeaderModalItem from "../HeaderModalItem/HeaderModalItem";

import logo from "../../images/logo.svg";

import css from "./Header.module.css";
import Wishlist from "../Wishlist/Wishlist";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);

    const location = useLocation();
    const inputRef = useRef(null);
    const modalRef = useRef(null);
    const wishlistRef = useRef(null);
    const orderRef = useRef(null);
    const debounceTimeoutRef = useRef(null);

    const wishlist = useSelector(selectWishlist);
    const wishlistCount = wishlist.length;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleFavoritesModal = () => {
        setIsFavoritesModalOpen(!isFavoritesModalOpen);
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(async () => {
            if (query.length > 2) {
                try {
                    const data = await fetchSearchResults(query);
                    setSearchResults(data.items);
                    setIsModalOpen(true);
                } catch (error) {
                    toast.error("Failed to load data. Please try again later.");
                    console.error("Failed to load data. Please try again later", error);
                }
            } else {
                setSearchResults([]);
                setIsModalOpen(false);
            }
        }, 300);
    };

    useEffect(() => {
        closeMenu();
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                inputRef.current &&
                !inputRef.current.contains(event.target)
            ) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutsideWish = (event) => {
            if (wishlistRef.current && !wishlistRef.current.contains(event.target) && !orderRef.current?.contains(event.target)) {
                setIsFavoritesModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideWish);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideWish);
        };
    }, []);

    return (
        <>
            <Toaster />

            <header className={css.header}>
                <Container style={{ position: "relative" }}>
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

                        <div className={css.headerContactsContainer}>
                            <div className={css.headerContacts}>
                                <BsFillTelephoneFill color="157DC7" className={css.headerContactsIcon} />

                                <a href="tel:+12489737534" className={css.headerContactsText} target="_blank" rel="noreferrer">
                                    +1 248 973 7534
                                </a>
                            </div>

                            <div className={css.headerContacts}>
                                <IoMail color="157DC7" className={css.headerContactsIcon} />

                                <a
                                    href="mailto:hello@bellcare-line.com"
                                    className={css.headerContactsText}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    hello@bellcare-line.com
                                </a>
                            </div>
                        </div>

                        <button className={css.headerFavorites} onClick={toggleFavoritesModal}>
                            <FaRegHeart className={css.headerFavoritesIcon} color="157DC7" />

                            <div className={css.headerFavoritesQuantityContainer}>
                                <p className={css.headerFavoritesQuantity}>{wishlistCount}</p>
                            </div>
                        </button>
                    </div>

                    <div className={css.headerSearchContainer}>
                        <input
                            type="text"
                            className={css.headerSearchInput}
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleInputChange}
                            onFocus={handleInputChange}
                            ref={inputRef}
                        />

                        <BiSearchAlt className={css.headerSearchIcon} color="157DC7" />
                    </div>

                    {isModalOpen && (
                        <div className={css.headerSearchModal} ref={modalRef}>
                            {searchResults.length ? (
                                <ul className={css.headerSearchResultsList}>
                                    {searchResults.map((result) => (
                                        <li key={result.id} className={css.headerSearchResultItem}>
                                            <HeaderModalItem result={result} setIsModalOpen={setIsModalOpen} />
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={css.headerSearchNoResults}>Oops! Nothing matches your search</p>
                            )}
                        </div>
                    )}
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

                <Wishlist
                    isFavoritesModalOpen={isFavoritesModalOpen}
                    toggleFavoritesModal={toggleFavoritesModal}
                    wishlistRef={wishlistRef}
                    orderRef={orderRef}
                />
            </header>
        </>
    );
};

export default Header;
