import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ManufacturerItem from "../../components/ManufacturersItem/ManufacturerItem";

import css from "./Manufacturers.module.css";

const manufacturers = [
    { text: "3M Pharmaceuticals" },
    { text: "AbbVie" },
    { text: "Abdi ibrahim" },
    { text: "Accord" },
    { text: "Actelion Pharmaceuticals" },
    { text: "Adeka" },
    { text: "Alexion Pharmaceuticals" },
    { text: "Allergan" },
    { text: "Alliance Healthcare" },
    { text: "Almus" },
    { text: "Amgen" },
    { text: "Anika Therapeutics" },
    { text: "Aspen" },
    { text: "Assos Pharmaceuticals" },
    { text: "Astellas" },
    { text: "AstraZeneca" },
    { text: "Bausch Health Companies" },
    { text: "Bayer" },
    { text: "Besins Healthcare" },
    { text: "Biogen" },
    { text: "Boehringer" },
    { text: "Bristol Myers Squibb" },
    { text: "Celgene" },
    { text: "Chiesi" },
    { text: "CSL Behring" },
    { text: "DBL" },
    { text: "Dr. Falk Pharma" },
    { text: "E.R. Squibb" },
    { text: "Ebewe Pharma" },
    { text: "Eisai" },
    { text: "Eli Lilly" },
    { text: "Eurogine" },
    { text: "Ferring Pharmaceuticals" },
    { text: "Galderma" },
    { text: "Genentech" },
    { text: "Gilead" },
    { text: "Glenmark Pharmaceuticals" },
    { text: "Grifols" },
    { text: "GSK" },
    { text: "Ipsen" },
    { text: "Janssen Pharmaceuticals" },
    { text: "Johnson" },
    { text: "Kaléo" },
    { text: "Kedrion Biopharma" },
    { text: "Koçak Farma" },
    { text: "Kreussler Pharma" },
    { text: "Kyowa Hakko Kirin" },
    { text: "LEO Pharma" },
    { text: "Lilly" },
    { text: "Meda Pharmaceuticals" },
    { text: "Merck KGaA" },
    { text: "Morningside Healthcare" },
    { text: "MSD" },
    { text: "Mylan Pharmaceuticals" },
    { text: "Norgine Pharma" },
    { text: "Novartis" },
    { text: "Novo Nordisk" },
    { text: "Organon Pharma" },
    { text: "Otsuka Pharmaceutical" },
    { text: "Perrigo" },
    { text: "Pfizer" },
    { text: "Pinewood Healthcare" },
    { text: "Prothya Biosolutions" },
    { text: "Roche" },
    { text: "Sandoz" },
    { text: "Sanofi" },
    { text: "Spectrum Naturals" },
    { text: "Stada Arzneimittel AG" },
    { text: "Stallergenes Greer" },
    { text: "Takeda Pharmaceuticals" },
    { text: "Teva Pharmaceuticals" },
    { text: "Tillotts Pharma" },
    { text: "UCB Pharma" },
    { text: "Valeant Pharmaceuticals" },
    { text: "Valeo Pharma" },
    { text: "Viatris UK Healthcare" },
    { text: "VIIV HEALTHCARE" },
    { text: "Williams Medical Supplies" },
    { text: "Zambon Group" },
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
