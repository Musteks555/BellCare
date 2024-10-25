import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import { clearWishlist } from "../../redux/wishlist/slice";
import { selectWishlist } from "../../redux/wishlist/selector";

import { RxCross2 } from "react-icons/rx";

import css from "./Order.module.css";
import Loader from "../Loader/Loader";

const Order = ({ onClose, orderRef, toggleFavoritesModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const wishlist = useSelector(selectWishlist);

    useEffect(() => {
        const handleEscapePress = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscapePress);

        return () => {
            document.removeEventListener("keydown", handleEscapePress);
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email && !phone) {
            setErrorMessage("Either email or phone must be provided.");
            toast.error("Please provide either an email or a phone number.");
            return;
        }

        const orderData = {
            name,
            email,
            phone,
            items: wishlist,
        };

        setIsLoading(true);

        try {
            const response = await axios.post("https://test.wax-stake.com/tg.php", orderData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data === "success") {
                dispatch(clearWishlist());
                setEmail("");
                setPhone("");
                setName("");
                toggleFavoritesModal();
                onClose();
                toast.success("Thank you for your order! Our team will reach out to you shortly during our business hours.");
            } else {
                toast.error("There was an error submitting your order. Please try again.");
            }
        } catch (error) {
            toast.error("There was an error submitting your order. Please try again.");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Toaster />

            <div className={css.orderModal} onClick={handleBackdropClick} ref={orderRef}>
                <div className={css.orderModalContent}>
                    <button className={css.orderModalCloseBtn} onClick={onClose}>
                        <RxCross2 className={css.orderModalCloseBtnIcon} />
                    </button>

                    <h2 className={css.orderModalTitle}>Place an Order</h2>

                    {isLoading ? (
                        <Loader />
                    ) : (
                        <form className={css.orderModalForm} onSubmit={handleSubmit}>
                            <label className={css.orderModalLabel}>
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={css.orderModalInput}
                                    placeholder="Name"
                                />
                            </label>

                            <label className={css.orderModalLabel}>
                                E-mail:
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={css.orderModalInput}
                                    placeholder="E-mail"
                                />
                            </label>

                            <label className={css.orderModalLabel}>
                                Phone:
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={css.orderModalInput}
                                    placeholder="Phone"
                                />
                            </label>

                            {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}

                            <button type="submit" className={css.orderModalSubmitBtn}>
                                SEND
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Order;
