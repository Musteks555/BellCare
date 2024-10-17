import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./DeliveryInformation.module.css";

const DeliveryInformation = () => {
    return (
        <>
            <DocumentTitle>Delivery Information</DocumentTitle>

            <section className={css.delivery}>
                <Container>
                    <h1 className={css.deliveryTitle}>DELIVERY INFORMATION</h1>

                    <ul className={css.deliveryList}>
                        <li className={css.deliveryItem}>
                            <h2 className={css.deliveryItemTitle}>MAIN INFORMATION</h2>

                            <div className={css.deliveryItemContainer}>
                                <p className={css.deliveryItemText}>
                                    At{" "}
                                    <b className={css.deliveryNameColor}>
                                        Bell<span>Care</span>
                                    </b>
                                    , our warehouse is stocked with a wide variety of popular medications, allowing us to process and
                                    dispatch your order quickly.
                                </p>

                                <h3 className={css.deliveryItemSubTitle}>Our working hours are:</h3>

                                <ul className={css.deliverySubList}>
                                    <li className={css.deliverySubItem}>
                                        <p className={css.deliveryItemText}>10AM - 6PM Monday - Thursday</p>
                                    </li>

                                    <li className={css.deliverySubItem}>
                                        <p className={css.deliveryItemText}>10AM - 5PM Friday</p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className={css.deliveryItem}>
                            <h2 className={css.deliveryItemTitle}>COURIER & DELIVERY TIME</h2>

                            <div className={css.deliveryItemContainer}>
                                <p className={css.deliveryItemText}>
                                    We partner with internationally recognized courier companies to ensure secure and timely delivery. A
                                    signature is required upon delivery for security.
                                </p>

                                <h3 className={css.deliveryItemSubTitle}>Delivery time frames are as follows:</h3>

                                <ul className={css.deliverySubList}>
                                    <li className={css.deliverySubItem}>
                                        <p className={css.deliveryItemText}>
                                            Orders placed between 9 AM to 5 PM EST will be shipped out the following business day.
                                        </p>
                                    </li>

                                    <li className={css.deliverySubItem}>
                                        <p className={css.deliveryItemText}>
                                            Orders placed on Friday between 9 AM to 5 PM EST will be shipped out the first coming Monday.
                                        </p>
                                    </li>
                                </ul>

                                <p className={css.deliveryItemText}>
                                    Shipping costs may vary or be waived depending on the order amount and product types.
                                </p>

                                <p className={css.deliveryItemText}>
                                    <b>Please note</b>, shipping delays may occur due to unforeseen circumstances, including but not limited
                                    to events such as war, strikes, riots, criminal acts, courier company issues, or weather conditions.{" "}
                                </p>
                            </div>
                        </li>

                        <li className={css.deliveryItem}>
                            <h2 className={css.deliveryItemTitle}>LOST PARCELS & DELAYED SHIPMENTS</h2>

                            <div className={css.deliveryItemContainer}>
                                <p className={css.deliveryItemText}>
                                    All orders are shipped via Express Mail based on the above delivery time frames.
                                    <br />
                                    <br />A package is considered delivered once we receive confirmation from the customer. In case of
                                    delays, we will first attempt to locate the package and resolve the issue. If no resolution is possible,
                                    we can send a replacement. However, the customer must agree to pay for both the replacement and the
                                    delayed package, should the original arrive later.
                                </p>
                            </div>
                        </li>

                        <li className={css.deliveryItem}>
                            <h2 className={css.deliveryItemTitle}>RETURN POLICY</h2>

                            <div className={css.deliveryItemContainer}>
                                <p className={css.deliveryItemText}>
                                    <b className={css.deliveryNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    accepts returns within 8 days of product receipt, provided the return is due to one of the following
                                    reasons:
                                </p>

                                <ul className={css.deliverySubList}>
                                    <li className={css.deliverySubItem}>
                                        <p className={css.deliveryItemText}>The product was incorrectly received.</p>
                                    </li>

                                    <li className={css.deliverySubItem}>
                                        <p className={css.deliveryItemText}>The product arrived damaged.</p>
                                    </li>
                                </ul>

                                <p className={css.deliveryItemText}>
                                    If either of these conditions applies, please contact us by email or phone as listed on our website.
                                    <br />
                                    <br />
                                    For valid returns, you will be offered either a replacement or a full refund for the returned products.
                                    <br />
                                    <b>No returns will be accepted after 8 days.</b>
                                    <br />
                                    <br />
                                    Until further instructions are provided, please store the products according to the manufacturer&apos;s
                                    recommended temperature and storage conditions.
                                </p>
                            </div>
                        </li>

                        <li className={css.deliveryItem}>
                            <h2 className={css.deliveryItemTitle}>REFUND</h2>

                            <div className={css.deliveryItemContainer}>
                                <p className={css.deliveryItemText}>
                                    Refunds will be processed to the original credit card used for payment. The timeframe for receiving the
                                    refund depends on how quickly your bank processes it. The full amount of the order will be refunded.
                                </p>
                            </div>
                        </li>

                        <li className={css.deliveryItem}>
                            <h2 className={css.deliveryItemTitle}>COMPLAINTS AND SUGGESTIONS</h2>

                            <div className={css.deliveryItemContainer}>
                                <p className={css.deliveryItemText}>
                                    At{" "}
                                    <b className={css.deliveryNameColor}>
                                        Bell<span>Care</span>
                                    </b>
                                    , your satisfaction is our top priority! We welcome all feedback and suggestions. You can reach us via
                                    email at <b>hello@bellcare-line.com</b> or contact our customer support team by phone. We&apos;re here
                                    to assist and listen!
                                </p>
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default DeliveryInformation;
