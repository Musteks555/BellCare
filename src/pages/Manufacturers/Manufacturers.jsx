import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ManufacturerItem from "../../components/ManufacturersItem/ManufacturerItem";

import css from "./Manufacturers.module.css";

const manufacturers = [
    { path: "/", text: "Novartis" },
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

const Manufacturers = () => {
    return (
        <>
            <DocumentTitle>All Manufacturers</DocumentTitle>

            <section className={css.manufacture}>
                <Container>
                    <h1 className={css.manufactureTitle}>All Manufacturers</h1>

                    <ul className={css.manufactureList}>
                        {manufacturers.map(({ text, path }, index) => (
                            <li key={index} className={css.manufactureItem}>
                                <ManufacturerItem text={text} path={path} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Manufacturers;
