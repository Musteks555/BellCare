import { Link } from "react-router-dom";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import logo from "../../images/logo.svg";

import Container from "../Container/Container";

import css from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <Container>
                <nav className={css.footerNavContainer}>
                    <ul className={css.footerNavList}>
                        <li className={css.footerNavItem}>
                            <h3 className={css.footerNavItemTitle}>Help & Customer Care</h3>

                            <ul className={css.footerNavItemList}>
                                <li>
                                    <Link to={"/about"} className={css.footerNavItemLink}>
                                        Who We Are
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/delivery"} className={css.footerNavItemLink}>
                                        Delivery Information
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/terms"} className={css.footerNavItemLink}>
                                        Terms
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/privacy-policy"} className={css.footerNavItemLink}>
                                        Cookies & Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/faq"} className={css.footerNavItemLink}>
                                        Frequently Asked Questions
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className={css.footerNavItem}>
                            <h3 className={css.footerNavItemTitle}>Contact us</h3>

                            <div className={css.footerContactsContainer}>
                                <BsFillTelephoneFill color="157DC7" className={css.footerContactsIcon} />

                                <a href="tel:+12489737534" className={css.footerNavItemLink} target="_blank" rel="noreferrer">
                                    +1 248 973 7534
                                </a>
                            </div>

                            <div className={css.footerContactsContainer}>
                                <IoMail color="157DC7" className={css.footerContactsIcon} />

                                <a href="mailto:hello@bellcare-line.com" className={css.footerNavItemLink} target="_blank" rel="noreferrer">
                                    hello@bellcare-line.com
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className={css.footerLogoContainer}>
                    <Link to={"/"} className={css.footerLogo}>
                        <img src={logo} alt="logo" className={css.footerLogoImage} />
                    </Link>

                    <p className={css.footerPrivacyText}>
                        <strong>BELL CARE</strong>
                        <br />
                        All rights reserved.
                        <br />© [2024] BELL CARE.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
