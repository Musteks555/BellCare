import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { removeFromWishlist, updateWishlistQuantity } from "../../redux/wishlist/slice";
// import { fetchProducts } from "../../api/wishlist";
import { fetchProductById } from "../../api/catalog";

import { RxCross2 } from "react-icons/rx";
import WishlistIcon from "../../images/wishlist-empty.svg?react";

import css from "./Wishlist.module.css";

const Wishlist = ({ isFavoritesModalOpen, toggleFavoritesModal, wishlistRef }) => {
    const [wishlist, setwishList] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);
    const dispatch = useDispatch();

    // const fetchWishlistItems = async () => {
    //     const storedWishlist = localStorage.getItem("wishlist");
    //     const wishlistItems = JSON.parse(storedWishlist) || [];
    //     const arrId = wishlistItems.map((item) => item.id);

    //     try {
    //         const response = await fetchProducts(arrId);
    //         // setwishList(response);

    //         // Временно, пока нет бекенда
    //         setwishList([
    //             {
    //                 id: "292",
    //                 name: "Kyleena 1 IUD (5 years) 19,5 mg",
    //                 format: "1 IUD (5 years) — 19,5 mg (17,5 mcg/24 hrs)",
    //                 text: "Kyleena is a hormonal intrauterine device (IUD) used to prevent pregnancy for up to five years. It releases a progestin hormone called levonorgestrel that thickens the cervical mucus and thins the uterine lining.",
    //                 note: "English packaging\nActive ingredient:Levonorgestrel",
    //                 description:
    //                     "Kyleena is an intrauterine contraceptive (IUC) device that helps prevent pregnancy for up to five years. It is a T-shaped plastic device that is inserted and left in the uterus. It slowly releases a hormone called levonorgestrel, which is similar to the hormone progesterone. This hormone thickens the mucus in the cervix, which helps to prevent sperm from entering the uterus. It also thins the lining of the uterus, making it harder for a fertilized egg to attach and grow. Kyleena is a safe and effective long-term birth control option for women who don’t want to take a daily pill or use other short-term methods.\nIt is over 99% effective in preventing pregnancy and can be used while breastfeeding. It is easy to insert and remove and has fewer hormones than other methods. It can also help reduce menstrual cramps and lighten periods. Kyleena is an excellent choice for women who want a reliable, long-term method of birth control.",
    //                 price: "375",
    //                 img: "3006786243496.jpg",
    //                 category: '["Endocrinology", "Fertility", "OBGYN"]',
    //                 manufacture: "Bayer",
    //                 brand: "Kyleena",
    //                 best: "1",
    //             },
    //             {
    //                 id: "335",
    //                 name: "Prolia 1 PreFilled Syringe 60 mg/ml",
    //                 format: "1 PreFilled Syringe — 60 mg/ml",
    //                 text: "Prolia is a prescription medication used to treat osteoporosis in postmenopausal women and in men at high risk of fractures. It helps to increase bone mass and reduce the risk of fractures.",
    //                 note: "Turkish packaging\nActive ingredient: Denosumab",
    //                 description:
    //                     "Prolia is a biopharmaceutical medication used to treat postmenopausal women with osteoporosis. It is a once-monthly injection that helps reduce the risk of fractures caused by osteoporosis. Prolia works by blocking a protein called RANKL (receptor activator of nuclear factor kappa-B ligand) that stops the formation of new bone cells and increases the breakdown of old bone cells. This helps to prevent further bone density loss and helps promote bone healing. Prolia is also used to treat men and premenopausal women with osteoporosis who have had an increased risk of fractures. Prolia helps increase bone density and reduce the risk of fractures in these patients.\nProlia is a safe and effective treatment for osteoporosis, and it has been proven to reduce the risk of fractures in postmenopausal women with osteoporosis.",
    //                 price: "425",
    //                 img: "6501055575758.jpg",
    //                 category: '["Endocrinology", "OBGYN", "Oncology", "Rheumatology"]',
    //                 manufacture: "Amgen",
    //                 brand: "Prolia",
    //                 best: "1",
    //             },
    //         ]);

    //         console.log("Response from API:", response);
    //     } catch (error) {
    //         console.error("Error during fetch:", error);
    //     }
    // };

    const fetchWishlistItems = async () => {
        const storedWishlist = localStorage.getItem("wishlist");
        const wishlistItems = JSON.parse(storedWishlist) || [];
        const arrId = wishlistItems.map((item) => item.id);

        try {
            const promises = arrId.map(async (id) => {
                const response = await fetchProductById(id);
                const item = wishlistItems.find((item) => item.id === id);
                return { ...response.items[0], quantity: item ? item.quantity : 1 };
            });

            const results = await Promise.all(promises);

            setwishList(results);
            setWishlistCount(results.length);
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    };

    useEffect(() => {
        if (isFavoritesModalOpen) {
            fetchWishlistItems();
        }
    }, [isFavoritesModalOpen]);

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
