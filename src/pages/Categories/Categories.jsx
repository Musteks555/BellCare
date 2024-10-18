import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

import AllergyIcon from "../../images/allergy.svg?react";
import CardiologyIcon from "../../images/cardiology.svg?react";
import DermatologyIcon from "../../images/dermatology.svg?react";
import EndocrinologyIcon from "../../images/endocrinology.svg?react";
import FertilityIcon from "../../images/fertility.svg?react";
import GastroenterologyIcon from "../../images/gastroenterology.svg?react";
import HematologyIcon from "../../images/hematology.svg?react";
import InfectionDiseaseIcon from "../../images/infection-disease.svg?react";
import NeurologyIcon from "../../images/neurology.svg?react";
import ObgynIcon from "../../images/obgyn.svg?react";
import OncologyIcon from "../../images/oncology.svg?react";
import PulmonologyIcon from "../../images/pulmonology.svg?react";
import RheumatologyIcon from "../../images/rheumatology.svg?react";
import SugarControlIcon from "../../images/sugar-control.svg?react";
import UrologyIcon from "../../images/urology.svg?react";
import WeightLossIcon from "../../images/weight-loss.svg?react";
import ErectileDysfunctionIcon from "../../images/erectile-dysfunction.svg?react";
import OphthalmologyIcon from "../../images/ophthalmology.svg?react";

import css from "./Categories.module.css";

const categories = [
    { icon: AllergyIcon, text: "Allergy" },
    { icon: CardiologyIcon, text: "Cardiology" },
    { icon: DermatologyIcon, text: "Dermatology" },
    { icon: EndocrinologyIcon, text: "Endocrinology" },
    { icon: FertilityIcon, text: "Fertility" },
    { icon: GastroenterologyIcon, text: "Gastroenterology" },
    { icon: HematologyIcon, text: "Hematology" },
    { icon: InfectionDiseaseIcon, text: "Infection Disease" },
    { icon: NeurologyIcon, text: "Neurology" },
    { icon: ObgynIcon, text: "OBGYN" },
    { icon: OncologyIcon, text: "Oncology" },
    { icon: PulmonologyIcon, text: "Pulmonology" },
    { icon: RheumatologyIcon, text: "Rheumatology" },
    { icon: SugarControlIcon, text: "Sugar Control" },
    { icon: UrologyIcon, text: "Urology" },
    { icon: WeightLossIcon, text: "Weight Loss" },
    { icon: ErectileDysfunctionIcon, text: "Erectile Dysfunction" },
    { icon: OphthalmologyIcon, text: "Ophthalmology" },
];

const Categories = () => {
    return (
        <>
            <DocumentTitle>All Categories</DocumentTitle>

            <section className={css.category}>
                <Container>
                    <h1 className={css.categoryTitle}>All Categories</h1>

                    <p className={css.categoryDescription}>
                        Here, you will find a wide selection of medications from the most reputed and well-known pharmaceutical
                        manufacturers, such as Pfizer, MSD, Roche, and more. We have more than a thousand products, with 95% of them being
                        permanently in stock.
                    </p>

                    <ul className={css.categoryList}>
                        {categories.map(({ icon, text }, index) => (
                            <li key={index} className={css.categoryItem}>
                                <CategoryItem icon={icon} text={text} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Categories;
