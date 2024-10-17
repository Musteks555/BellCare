import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Terms.module.css";

const Terms = () => {
    return (
        <>
            <DocumentTitle>Terms</DocumentTitle>

            <section className={css.terms}>
                <Container>
                    <h1 className={css.termsTitle}>TERMS</h1>

                    <ul className={css.termsList}>
                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>ORDERS</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    Customers can place orders by phone during our business hours or via email at any time. We will process
                                    these orders as quickly as possible, typically within 24 business hours of receiving the request.
                                    <br />
                                    <br />
                                    After placing an order, the customer will receive an invoice by email. Please note that the invoice is
                                    not a shipment or payment notification. The products are generally shipped out the following business
                                    day after the order is processed.
                                    <br />
                                    <br />
                                    All orders for products are subject to availability. We reserve the right to cancel any purchase order
                                    or agreement in cases where supplying the product is impossible.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>CUSTOMER INFORMATION</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    collects personal information from customers, including their name, address, email address, phone
                                    number, and fax number, to set up an account. In order to provide the requested products and services,
                                    fulfill customer orders, and process payments, we may also collect additional data, such as billing
                                    information.
                                    <br />
                                    <br />
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    is responsible for protecting personal information under its control.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>DELIVERY AND DELAY </h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    All orders will be shipped via Express Mail. The average delivery time is 1 to 10 business days from the
                                    date the parcel is shipped.
                                    <br />
                                    <br />
                                    <b>Please note</b>, shipping delays may occur due to unforeseen circumstances, including but not limited
                                    to war, strikes, riots, criminal acts, courier company errors, or weather conditions.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>RETURN POLICY</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    accepts returns within 8 days from the date of receipt, provided the return is due to one of the
                                    following conditions:
                                </p>

                                <ul className={css.termsSubList}>
                                    <li className={css.termsSubItem}>
                                        <p className={css.termsItemText}>The product was incorrectly received.</p>
                                    </li>

                                    <li className={css.termsSubItem}>
                                        <p className={css.termsItemText}>The product was damaged upon arrival. </p>
                                    </li>
                                </ul>

                                <p className={css.termsItemText}>
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

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>DAMAGED PRODUCTS</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    assumes responsibility for products in transit until they are delivered to the customer. Any claims
                                    regarding loss, shortage, breakage, leakage, or other damages during transit must be reported within 8
                                    days of the customer receiving or becoming aware of such issues.
                                    <br />
                                    <br />
                                    Claims submitted without proper documentation, including relevant pictures, will not be accepted. In
                                    cases where customs or other authorities damage or open packages,{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    will issue a refund by sending a replacement with an equivalent amount of products.
                                    <br />
                                    <br />
                                    The customer is expected to fully cooperate with{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    in filing any claims against the carrier.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>CANCELLATION AND POSTPONEMENT</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    Orders can be canceled only before the products are shipped. Once an order has been processed and
                                    shipped, it becomes binding for the customer.
                                    <br />
                                    <br />
                                    Orders can also be placed in advance and shipped later upon the customer&apos;s request.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>PRICES AND PAYMENT</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>All prices are listed in US dollars.</p>

                                <p className={css.termsItemText}>We accept payment via credit cards from the following providers:</p>

                                <ul className={css.termsSubList}>
                                    <li className={css.termsSubItem}>
                                        <p className={css.termsItemText}>Visa</p>
                                    </li>

                                    <li className={css.termsSubItem}>
                                        <p className={css.termsItemText}>MasterCard </p>
                                    </li>
                                </ul>

                                <p className={css.termsItemText}>
                                    <b>Important:</b> We treat credit card information with the utmost confidentiality and never store such
                                    details. Our payment system ensures that once credit card information is entered,{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    does not have access to these details. This approach guarantees maximum security for our customers.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>COMPLIANCE</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    operates as an international wholesaler and assumes no liability for ensuring compliance with the
                                    legislation in the customer&apos;s country of establishment or where the customer imports the products.
                                    <br />
                                    <br />
                                    The customer is responsible for obtaining and maintaining any necessary or relevant marketing
                                    authorizations or fulfilling any regulatory registration requirements for the products they intend to
                                    import, market, or sell.
                                    <br />
                                    <br />
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    only accepts orders from certified doctors, clinics, hospitals, and wholesalers.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>OBLIGATIONS TO INFORM AND PRODUCT RECALLS</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    The customer must report any adverse events related to a product to{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    within 48 hours of becoming aware of such an issue.
                                </p>

                                <p className={css.termsItemText}>An adverse event is defined as:</p>

                                <ul className={css.termsSubList}>
                                    <li className={css.termsSubItem}>
                                        <p className={css.termsItemText}>
                                            Any malfunction, failure, defect, or deterioration in the characteristics and/or performance of
                                            a product, or any inadequacy in labeling or instructions for use, that could or has caused
                                            serious harm or death.
                                        </p>
                                    </li>

                                    <li className={css.termsSubItem}>
                                        <p className={css.termsItemText}>
                                            Any technical or medical reason related to the product&apos;s performance that results in a
                                            systematic recall of products of the same type by the customer.
                                        </p>
                                    </li>
                                </ul>

                                <p className={css.termsItemText}>
                                    The customer must inform{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    of any complaints related to products no later than 8 days after receiving them.
                                    <br />
                                    <br />
                                    This must include a comprehensive description of the complaint and any actions taken by the customer in
                                    response.
                                    <br />
                                    <br />
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    will promptly notify the customer of any product recalls and provide instructions for returning the
                                    affected products.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>LIMITATIONS OF LIABILITY</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    will not be liable for any indirect losses or consequential damages, including but not limited to loss
                                    of business opportunities, profit, goodwill, or penalties.
                                    <br />
                                    <br />
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>
                                    &apos;s maximum liability shall not exceed the original purchase price paid by the customer for the
                                    product, regardless of the basis for the claim, whether it involves negligence, strict liability, or
                                    product liability.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>COMPLAINTS AND SUGGESTIONS</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    At{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>
                                    , your satisfaction is our priority! We welcome your feedback and suggestions. Feel free to reach out
                                    via email at hello@bellcare-line.com, or speak with one of our customer support representatives by
                                    phone. We&apos;re here to listen and help.
                                </p>
                            </div>
                        </li>

                        <li className={css.termsItem}>
                            <h2 className={css.termsItemTitle}>DISCLAIMER</h2>

                            <div className={css.termsItemContainer}>
                                <p className={css.termsItemText}>
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    cannot guarantee that the content on our website is always free from inaccuracies or typographical
                                    errors, nor can we ensure that all information is up-to-date at all times.{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    reserves the right to amend the content of the website at any time.
                                    <br />
                                    <br />
                                    While{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    strives to present accurate texts, images, and pricing, errors may occur. If a customer is charged
                                    incorrectly,{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    will issue a credit note or send an invoice for the difference.
                                    <br />
                                    <br />
                                    In cases where a customer has not provided all the necessary information for order processing, and{" "}
                                    <b className={css.termsNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    is unable to contact the customer, the order will be automatically canceled.
                                </p>
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default Terms;
