import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Faq.module.css";

const Faq = () => {
    return (
        <>
            <DocumentTitle>Frequently Asked Questions</DocumentTitle>

            <section className={css.faq}>
                <Container>
                    <h1 className={css.faqTitle}>FREQUENTLY ASKED QUESTIONS</h1>

                    <ul className={css.faqList}>
                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>
                                WHAT DOES{" "}
                                <b className={css.faqNameColor}>
                                    Bell<span>Care</span>
                                </b>{" "}
                                OFFER?
                            </h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>
                                    As a certified facility in Europe,{" "}
                                    <b className={css.faqNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    proudly imports products from countries with government-regulated price controls. This enables us to
                                    offer attractive pricing to both small and large-scale businesses. We are committed to assisting you
                                    with your order and packaging requirements. Our experienced staff provides flexible payment options,
                                    allowing you to focus more on patient care. Customer satisfaction is our primary goal, and we strive to
                                    provide the best service possible. With{" "}
                                    <b className={css.faqNameColor}>
                                        Bell<span>Care</span>
                                    </b>
                                    , you&apos;ll receive genuine products, quick shipping, expert customer support, and unbeatable prices.
                                </p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>HOW CAN I PLACE AN ORDER? </h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>
                                    To place an order, simply add your selections to the cart and fill in your personal information.
                                    Afterward, our manager will get in touch with you promptly during our business hours.
                                </p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>WHAT ARE YOUR BUSINESS HOURS?</h2>

                            <div className={css.faqItemContainer}>
                                <ul className={css.faqSubList}>
                                    <li className={css.faqSubItem}>
                                        <p className={css.faqItemText}>10 AM - 6 PM EST, Monday - Thursday</p>
                                    </li>

                                    <li className={css.faqSubItem}>
                                        <p className={css.faqItemText}>10 AM - 5 PM EST, Friday</p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>WHO CAN PLACE AN ORDER?</h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>
                                    <b className={css.faqNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    only accepts orders from doctors, clinics, hospitals, and wholesalers.
                                </p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>HOW FAST WILL I RECEIVE THE PRODUCTS?</h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>
                                    You will receive your consignment within 2 to 10 business days from the day the parcel is shipped.
                                </p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>WHAT PAYMENT METHODS DO YOU ACCEPT?</h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>We accept payments made with Visa and MasterCard.</p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>WHAT DO I DO IF MY PACKAGE GETS LOST OR DAMAGED DURING TRANSIT?</h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>
                                    If your package does not reach you, our first step is to locate it and resolve the issue. In the event
                                    of a return, you will be offered either a replacement of the goods or a 100% refund of the returned
                                    products.
                                </p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>CONTACT US</h2>

                            <div className={css.faqItemContainer}>
                                <p className={css.faqItemText}>
                                    Should you have any other inquiries, please fill in the contact form, and one of our managers will reach
                                    out to you within 24 hours.
                                </p>
                            </div>
                        </li>

                        <li className={css.faqItem}>
                            <h2 className={css.faqItemTitle}>Please Note: We only sell to certified doctors and companies.</h2>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Faq;
