import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./WhoWeAre.module.css";

const WhoWeAre = () => {
    return (
        <>
            <DocumentTitle>Who We Are</DocumentTitle>

            <section className={css.about}>
                <Container>
                    <h1 className={css.aboutTitle}>WHO WE ARE </h1>

                    <p className={css.aboutDescription}>
                        As a trusted European facility,{" "}
                        <b className={css.aboutNameColor}>
                            Bell<span>Care</span>
                        </b>{" "}
                        specializes in importing pharmaceutical products from countries with regulated pricing systems. This allows us to
                        offer competitive rates to businesses of all sizes.
                        <br />
                        <br />
                        We source these products in bulk directly from well-established pharmaceutical manufacturers, ensuring authenticity
                        and quality through our certified Pharma license.
                        <br />
                        <br />
                        Our dedicated team is here to assist you with order processing and packaging needs, offering flexible payment
                        solutions to help you focus on delivering the best care to your patients. At{" "}
                        <b className={css.aboutNameColor}>
                            Bell<span>Care</span>
                        </b>
                        , customer satisfaction is our top priority, and we are committed to providing exceptional service.
                        <br />
                        <br />
                        With{" "}
                        <b className={css.aboutNameColor}>
                            Bell<span>Care</span>
                        </b>
                        , you can expect genuine products, fast shipping, expert customer support, and unmatched pricing.
                    </p>

                    <h2 className={css.aboutSubTitle}>
                        Choose Your Medication with{" "}
                        <strong>
                            Bell<span>Care</span>
                        </strong>
                    </h2>

                    <ul className={css.aboutList}>
                        <li className={css.aboutItem}>
                            <h3 className={css.aboutItemTitle}>100% Authentic Products</h3>

                            <p className={css.aboutItemText}>Access genuine medications sourced directly from leading manufacturers.</p>
                        </li>

                        <li className={css.aboutItem}>
                            <h3 className={css.aboutItemTitle}>Delivery time frames are as follows:</h3>

                            <ul className={css.aboutSubList}>
                                <li className={css.aboutSubItem}>
                                    <p className={css.aboutItemText}>
                                        Orders placed between 9 AM to 5 PM EST will be shipped out the following business day.
                                    </p>
                                </li>

                                <li className={css.aboutSubItem}>
                                    <p className={css.aboutItemText}>
                                        Orders placed on Friday between 9 AM to 5 PM EST will be shipped out the first coming Monday.
                                    </p>
                                </li>
                            </ul>
                        </li>

                        <li className={css.aboutItem}>
                            <h3 className={css.aboutItemTitle}>Only original products</h3>

                            <p className={css.aboutItemText}>
                                By purchasing wholesale medications from{" "}
                                <b className={css.aboutNameColor}>
                                    Bell<span>Care</span>
                                </b>
                                , your clinic can save thousands each month. We understand the importance of reliable medical supplies and
                                offer a wide range of essential medications at highly competitive prices.
                                <br />
                                <br />
                                Our inventory includes both well-known brand-name medications and generic alternatives, catering to various
                                medical specialties. In the fast-paced wholesale market, we aim not only to compete but to lead in customer
                                satisfaction, ensuring our success is measured by your satisfaction with our products.
                                <br />
                                <br />
                                <b className={css.aboutNameColor}>
                                    Bell<span>Care</span>
                                </b>{" "}
                                is committed to providing you with the most cost-effective pricing available.
                            </p>
                        </li>

                        <li className={css.aboutItem}>
                            <h3 className={css.aboutItemTitle}>Our Mission</h3>

                            <p className={css.aboutItemText}>
                                At{" "}
                                <b className={css.aboutNameColor}>
                                    Bell<span>Care</span>
                                </b>
                                , our mission is to be your go-to online destination for pharmaceutical needs. We are dedicated to providing
                                tailored solutions for your business, ensuring that when it's time to restock, we're the first name that
                                comes to mind.
                            </p>
                        </li>

                        <li className={css.aboutItem}>
                            <h3 className={css.aboutItemTitle}>Our Vision</h3>

                            <p className={css.aboutItemText}>
                                Our vision is simple: to deliver the best for the best. We strive to support you in becoming a leading
                                provider in your field by offering top-quality products and services.
                            </p>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default WhoWeAre;
