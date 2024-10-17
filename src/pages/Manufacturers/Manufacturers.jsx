import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ManufacturerItem from "../../components/ManufacturersItem/ManufacturerItem";

import css from "./Manufacturers.module.css";

const manufacturers = [
    { text: "Novartis" },
    { text: "Cardiology" },
    { text: "Dermatology" },
    { text: "Endocrinology" },
    { text: "Fertility" },
    { text: "Gastroenterology" },
    { text: "Hematology" },
    { text: "Infection Disease" },
    { text: "Neurology" },
    { text: "OBGYN" },
    { text: "Oncology" },
    { text: "Pulmonology" },
    { text: "Rheumatology" },
    { text: "Sugar Control" },
    { text: "Urology" },
    { text: "Weight Loss" },
    { text: "Erectile Dysfunction" },
    { text: "Ophthalmology" },
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
