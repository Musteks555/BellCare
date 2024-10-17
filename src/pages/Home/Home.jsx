import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

import BrowseIcon from "../../images/browse.svg?react";
import SubmitIcon from "../../images/submit.svg?react";
import ConfirmIcon from "../../images/confirm.svg?react";

import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Home.module.css";

const Home = () => {
    return (
        <>
            <DocumentTitle>Bell Care</DocumentTitle>

            <section className={css.homeHero}>
                <Container>
                    <Link to={"/categories"} className={css.homeHeroLink}>
                        Go to Catalog
                        <FaArrowRightLong />
                    </Link>
                </Container>
            </section>

            <section className={css.homeBestsellers}>
                <Container>
                    <h2 className={css.homeTitle}>OUR BESTSELLERS</h2>
                </Container>
            </section>

            <section className={css.homeOrder}>
                <Container>
                    <h2 className={css.homeTitle}>HOW TO PLACE AN ORDER</h2>

                    <ul className={css.homeOrderList}>
                        <li className={css.homeOrderItem}>
                            <div className={css.homeOrderItemIconContainer}>
                                <BrowseIcon className={css.homeOrderItemIcon} />
                            </div>

                            <h3 className={css.homeOrderItemTitle}>Browse</h3>

                            <p className={css.homeOrderItemText}>Review our catalog and select the products you need</p>
                        </li>

                        <li className={css.homeOrderItem}>
                            <div className={css.homeOrderItemIconContainer}>
                                <SubmitIcon className={css.homeOrderItemIcon} />
                            </div>

                            <h3 className={css.homeOrderItemTitle}>Submit the order</h3>

                            <p className={css.homeOrderItemText}>
                                Add your chosen items to the cart and provide your contact details.
                                <br />
                                Payment is not required at this stage.
                            </p>
                        </li>

                        <li className={css.homeOrderItem}>
                            <div className={css.homeOrderItemIconContainer}>
                                <ConfirmIcon className={css.homeOrderItemIcon} />
                            </div>

                            <h3 className={css.homeOrderItemTitle}>Confirm Your Order</h3>

                            <p className={css.homeOrderItemText}>
                                Our manager will get in touch with you promptly during our business hours.
                            </p>
                        </li>
                    </ul>

                    <h3 className={css.homeOrderSubTitle}>PLEASE NOTE: We only sell to certified doctors and businesses.</h3>
                </Container>
            </section>
        </>
    );
};

export default Home;
