import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Container from "../../components/Container/Container";

import css from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <>
            <DocumentTitle>Contact Us</DocumentTitle>

            <section className={css.contact}>
                <Container>
                    <h1 className={css.contactTitle}>Contact Us</h1>

                    <p className={css.contactSubTitle}>
                        Our expert team is here to support you every step of the way, from placing your order to ensuring it arrives safely
                        at your doorstep.
                    </p>

                    <p className={css.contactNote}>
                        <strong>PLEASE NOTE:</strong> We only sell to certified doctors and businesses.
                    </p>
                </Container>
                <Container>
                    <h2 className={css.contactListTitle}>Contacts:</h2>

                    <ul className={css.contactList}>
                        <li className={css.contactItem}>
                            <IoMail color="157dc7" className={css.contactItemIcon} />

                            <a href="mailto:hello@bellcare-line.com" className={css.contactItemText} target="_blank" rel="noreferrer">
                                hello@bellcare-line.com
                            </a>
                        </li>

                        <li className={css.contactItem}>
                            <BsFillTelephoneFill color="157dc7" className={css.contactItemIcon} />

                            <a href="tel:+12489737534" className={css.contactItemText} target="_blank" rel="noreferrer">
                                +1 248 973 7534
                            </a>
                        </li>

                        <li className={css.contactItem}>
                            <BsFillTelephoneFill color="157dc7" className={css.contactItemIcon} />

                            <a href="tel:+12489737534" className={css.contactItemText} target="_blank" rel="noreferrer">
                                +1 580 786 4420
                            </a>
                        </li>

                        <li className={css.contactItem}>
                            <BsFillTelephoneFill color="157dc7" className={css.contactItemIcon} />

                            <a href="tel:+12489737534" className={css.contactItemText} target="_blank" rel="noreferrer">
                                +1 419 679 4151
                            </a>
                        </li>

                        <li className={css.contactItem}>
                            <BsFillTelephoneFill color="#157dc7" className={css.contactItemIcon} />

                            <a href="tel:+12489737534" className={css.contactItemText} target="_blank" rel="noreferrer">
                                +1 217 878 4659
                            </a>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default ContactUs;
