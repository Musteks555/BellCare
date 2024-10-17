import BrandItem from "../../components/BrandItem/BrandItem";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Brands.module.css";

const brands = [
    { path: "/", text: "Allergy" },
    { path: "/", text: "Cardiology" },
    { path: "/", text: "Dermatology" },
    { path: "/", text: "Endocrinology" },
    { path: "/", text: "Fertility" },
    { path: "/", text: "Gastroenterology" },
    { path: "/", text: "Hematology" },
    { path: "/", text: "Infection Disease" },
    { path: "/", text: "Neurology" },
    { path: "/", text: "OBGYN" },
    { path: "/", text: "Oncology" },
    { path: "/", text: "Pulmonology" },
    { path: "/", text: "Rheumatology" },
    { path: "/", text: "Sugar Control" },
    { path: "/", text: "Urology" },
    { path: "/", text: "Weight Loss" },
    { path: "/", text: "Erectile Dysfunction" },
    { path: "/", text: "Ophthalmology" },
];

const Brands = () => {
    return (
        <>
            <DocumentTitle>All Brands</DocumentTitle>

            <section className={css.brand}>
                <Container>
                    <h1 className={css.brandTitle}>All Brands</h1>

                    <ul className={css.brandList}>
                        {brands.map(({ text, path }, index) => (
                            <li key={index} className={css.brandItem}>
                                <BrandItem text={text} path={path} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Brands;
