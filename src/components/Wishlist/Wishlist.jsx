import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { removeFromWishlist, updateWishlistQuantity } from "../../redux/wishlist/slice";
import { fetchProducts } from "../../api/wishlist";

import { RxCross2 } from "react-icons/rx";
import WishlistIcon from "../../images/wishlist-empty.svg?react";

import css from "./Wishlist.module.css";

const Wishlist = ({ isFavoritesModalOpen, toggleFavoritesModal, wishlistRef }) => {
    const [wishlist, setwishList] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [totalSum, setTotalSum] = useState(0);
    const dispatch = useDispatch();

    const fetchWishlistItems = async () => {
        const storedWishlist = localStorage.getItem("wishlist");
        const wishlistItems = JSON.parse(storedWishlist) || [];
        const arrId = wishlistItems.map((item) => item.id);

        try {
            const response = await fetchProducts(arrId);

            const updatedWishlist = response.items.map((product) => {
                const wishlistItem = wishlistItems.find((item) => item.id === product.id);
                return { ...product, quantity: wishlistItem ? wishlistItem.quantity : 1 };
            });

            setwishList(updatedWishlist);
            setWishlistCount(updatedWishlist.length);
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    };

    const calculateTotalSum = (wishlist) => {
        const total = wishlist.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalSum(total);
    };

    useEffect(() => {
        if (isFavoritesModalOpen) {
            fetchWishlistItems();
        }
    }, [isFavoritesModalOpen]);

    useEffect(() => {
        calculateTotalSum(wishlist);
    }, [wishlist]);

    const handleDecrease = (id) => {
        setwishList((prevWishlist) => {
            const updatedWishlist = prevWishlist.map((item) => {
                if (item.id === id && item.quantity > 1) {
                    const newQuantity = item.quantity - 1;

                    dispatch(updateWishlistQuantity({ id, quantity: newQuantity }));

                    return { ...item, quantity: newQuantity };
                }

                return item;
            });

            return updatedWishlist;
        });
    };

    const handleIncrease = (id) => {
        setwishList((prevWishlist) => {
            const updatedWishlist = prevWishlist.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + 1;

                    dispatch(updateWishlistQuantity({ id, quantity: newQuantity }));

                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            return updatedWishlist;
        });
    };

    const handleInputChange = (e, id) => {
        const value = parseInt(e.target.value);

        if (!isNaN(value) && value > 0) {
            setwishList((prevWishlist) => {
                const updatedWishlist = prevWishlist.map((item) => {
                    if (item.id === id) {
                        dispatch(updateWishlistQuantity({ id, quantity: value }));

                        return { ...item, quantity: value };
                    }

                    return item;
                });

                return updatedWishlist;
            });
        }
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromWishlist({ id }));

        setwishList((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter((item) => item.id !== id);

            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

            setWishlistCount(updatedWishlist.length);

            return updatedWishlist;
        });
    };

    return (
        <div ref={wishlistRef} className={`${css.favoritesModal} ${isFavoritesModalOpen ? css.favoritesModalOpen : ""}`}>
            <button type="button" className={css.favoritesModalCloseBtn} onClick={toggleFavoritesModal}>
                <RxCross2 className={css.favoritesModalCloseIcon} />
            </button>

            <h2 className={css.favoritesModalTitle}>Wish List</h2>

            <p className={css.favoritesModalQuantity}>
                You have <span>{wishlistCount} items</span>
            </p>

            <p className={css.favoritesModalTotalSum}>
                Total Sum: <span>${totalSum.toFixed(2)}</span>
            </p>

            {wishlist.length > 0 ? (
                <ul className={css.favoritesModalList}>
                    {wishlist.map((item) => (
                        <li key={item.id} className={css.favoritesModalItem}>
                            <button className={css.favoritesModalItemBtnRemove} onClick={() => handleRemoveItem(item.id)}>
                                <RxCross2 className={css.favoritesModalItemBtnRemoveIcon} />
                            </button>

                            <img src={`https://test.wax-stake.com/img/${item.img}`} alt={item.name} className={css.favoritesModalItemImg} />

                            <div className={css.favoritesModalItemContainer}>
                                <p className={css.favoritesModalItemName}>{item.name}</p>

                                <p className={css.favoritesModalItemPrice}>${item.price}</p>

                                <div className={css.favoritesModalItemQuantityContainer}>
                                    <button
                                        className={css.favoritesModalItemQuantityBtn}
                                        onClick={() => handleDecrease(item.id, item.quantity)}
                                    >
                                        -
                                    </button>

                                    <input
                                        type="text"
                                        className={css.favoritesModalItemQuantityInput}
                                        value={item.quantity}
                                        onChange={(e) => handleInputChange(e, item.id)}
                                    />

                                    <button
                                        className={css.favoritesModalItemQuantityBtn}
                                        onClick={() => handleIncrease(item.id, item.quantity)}
                                    >
                                        +
                                    </button>
                                </div>

                                <p className={css.favoritesModalItemSum}>Sum: ${Number(item.price) * Number(item.quantity)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    <WishlistIcon className={css.favoritesModalIcon} />

                    <p className={css.favoritesModalEmpty}>Your Wishlist is empty</p>
                </>
            )}

            <button type="button" className={css.favoritesModalBtnSubmit}>
                SUBMIT A REQUEST
            </button>
        </div>
    );
};

export default Wishlist;
