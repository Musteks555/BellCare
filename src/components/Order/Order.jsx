import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearWishlist } from "../../redux/wishlist/slice";
import { selectWishlist } from "../../redux/wishlist/selector";

import { RxCross2 } from "react-icons/rx";

import css from "./Order.module.css";

const Order = ({ onClose, orderRef, toggleFavoritesModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email && !phone) {
            setErrorMessage("Either email or phone must be provided.");
            return;
        }

        const orderData = {
            name,
            email,
            phone,
            items: wishlist,
        };

        console.log("Order submitted", orderData);

        dispatch(clearWishlist());
        toggleFavoritesModal();
        onClose();
    };

    return (
        <div className={css.orderModal} onClick={handleBackdropClick} ref={orderRef}>
            <div className={css.orderModalContent}>
                <button className={css.orderModalCloseBtn} onClick={onClose}>
                    <RxCross2 className={css.orderModalCloseBtnIcon} />
                </button>

                <h2 className={css.orderModalTitle}>Place an Order</h2>

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
            </div>
        </div>
    );
};

export default Order;
