import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Favorites.module.css";

const Favorites = () => {
    return (
        <>
            <DocumentTitle>Wish List</DocumentTitle>

            <section className={css.favorites}>
                <Container></Container>
            </section>
        </>
    );
};

export default Favorites;
