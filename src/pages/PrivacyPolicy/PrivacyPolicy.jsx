import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    return (
        <>
            <DocumentTitle>Cookies & Privacy policy</DocumentTitle>

            <section className={css.privacy}>
                <Container>
                    <h1 className={css.privacyTitle}>COOKIES & PRIVACY POLICY</h1>

                    <ul className={css.privacyList}>
                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>GENERAL INFORMATION</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    <b className={css.privacyNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    collects, processes, and stores data in accordance with the EU General Data Protection Regulation
                                    (GDPR). The information we collect is used only for providing the best possible service and will not be
                                    sold or used for any other purposes.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>PRIVACY POLICY</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    Sensitive information will never be shared with third parties unless you give express consent. We only
                                    collect personal information that you provide directly, such as through signing up for our newsletter or
                                    creating an account. This may include details like your name, address, postal code, and email.
                                    <br />
                                    <br />
                                    Personal data is collected to provide the requested services and improve user experience through studies
                                    and analyses that enhance our marketing strategies, products, services, and technologies. We may share
                                    your data with trusted partners, such as our order management system, MailChimp for newsletters, and
                                    Google Analytics.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>PROTECTION OF PERSONAL DATA</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    We are required by law to keep your personal data secure and confidential. All personal data is stored
                                    on secure servers in controlled facilities. While we take every precaution to secure your information,
                                    we cannot guarantee the complete security of data transmitted over the internet. Thus, any personal
                                    information you submit is at your own risk. In the event of a security breach that poses significant
                                    risk to you, such as identity theft or financial loss, we will notify you as soon as possible.
                                    <br />
                                    <br />
                                    We have implemented internal security guidelines, including data encryption, to prevent unauthorized
                                    access to your information. Data is deleted or anonymized once its purpose has been fulfilled.
                                    <br />
                                    <br />
                                    Due to the rapid development of the internet, we reserve the right to update this policy and will notify
                                    you of any significant changes via our website.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>YOUR RIGHTS</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    You have the right to request deletion of your data under the GDPR. Should you wish to delete your
                                    personal information,{" "}
                                    <b className={css.privacyNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    will remove all data not legally required to be retained. Additionally, you may withdraw your consent
                                    for data processing at any time.
                                    <br />
                                    <br />
                                    Data for former customers is deleted 5 years after the relationship ends, provided there are no
                                    outstanding obligations. You also have the right to request access to your data by contacting us at
                                    hello@bellcare-line.com
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>STORAGE OF PERSONAL DATA</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    We store relevant personal data for 5 years, as per the &#34;Accounting Act&#34;. Any personal
                                    information that is no longer needed for its original purpose will be deleted or anonymized.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>COOKIES</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    We use cookies to improve the user experience. By using our website, you agree to the use of cookies as
                                    outlined below.
                                    <br />
                                    <br />
                                    Cookies are anonymous, contain no personal data, and cannot harm your computer. They are used to analyze
                                    how the website is used, ensuring smooth navigation and tailored services. Some cookies are
                                    session-based, while others are persistent and remain for future visits.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>WHAT ARE COOKIES?</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    Cookies are small text files placed in your browser that allow websites to recognize your computer.
                                    Nearly all websites use cookies for analysis, personalization, and functional purposes.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>HOW TO AVOID COOKIES?</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    You can block or delete cookies via your browser settings. However, doing so may affect the
                                    functionality of the website.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>WHAT ARE COOKIES USED FOR?</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    <b className={css.privacyNameColor}>
                                        Bell<span>Care</span>
                                    </b>{" "}
                                    uses cookies to gather statistical data and track user behavior to improve our website. These cookies
                                    help us tailor content to your preferences and analyze user experience.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>THIRD-PARTY COOKIES</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    We use third-party services such as Google Analytics and social media platforms like Facebook and
                                    Instagram, which also place cookies on your device. These third-party cookies help us gather statistical
                                    information and provide social media functionalities. You can opt out of third-party cookies via your
                                    browser.
                                </p>
                            </div>
                        </li>

                        <li className={css.privacyItem}>
                            <h2 className={css.privacyItemTitle}>FUNCTIONALITY</h2>

                            <div className={css.privacyItemContainer}>
                                <p className={css.privacyItemText}>
                                    Some cookies are necessary for the technical operation of our website. These cookies ensure smooth
                                    navigation and proper functionality across different sections of the website.
                                </p>
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
};

export default PrivacyPolicy;
