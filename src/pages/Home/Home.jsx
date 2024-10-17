import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

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
                </Container>
            </section>
        </>
    );
};

export default Home;
