import { Link } from "react-router-dom";

import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

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
                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <AllergyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Allergy</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <CardiologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Cardiology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <DermatologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Dermatology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <EndocrinologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Endocrinology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <FertilityIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Fertility</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <GastroenterologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Gastroenterology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <HematologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Hematology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <InfectionDiseaseIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Infection Disease</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <NeurologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Neurology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <ObgynIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>OBGYN</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <OncologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Oncology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <PulmonologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Pulmonology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <RheumatologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Rheumatology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <SugarControlIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Sugar Control</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <UrologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Urology</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <WeightLossIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Weight Loss</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <ErectileDysfunctionIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Erectile Dysfunction</p>
                            </Link>
                        </li>

                        <li className={css.categoryItem}>
                            <Link to={""} className={css.categoryItemLink}>
                                <div className={css.categoryItemImgContainer}>
                                    <OphthalmologyIcon className={css.categoryItemImg} />
                                </div>

                                <p className={css.categoryItemText}>Ophthalmology</p>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Categories;
