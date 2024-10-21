import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

import { fetchProductById } from "../../api/catalog";

import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import HeartIcon from "../../images/heart.svg?react";
import NoDataIcon from "../../images/no-data.svg?react";

import css from "./Product.module.css";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchProductById(id)
            .then((data) => {
                setProduct(data.items[0]);
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Failed to load data. Please try again later.");
                console.error("Failed to fetch product data:", error);
                setLoading(false);
            });
    }, [id]);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const handleLikeClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsLiked((prev) => !prev);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <DocumentTitle>{product ? `Buy ${product.name}` : "Product not found"}</DocumentTitle>
            <Toaster />

            <section className={css.product}>
                <Container>
                    {product ? (
                        <div className={css.productContainer}>
                            <img src={`https://test.wax-stake.com/img/${product.img}`} alt={product.name} className={css.productImg} />

                            <div className={css.productInfoContainer}>
                                <h1 className={css.productName}>{product.name}</h1>

                                {product.manufacture ? (
                                    <p className={css.productManufacture}>
                                        See more by{" "}
                                        <Link to={`/catalog?manufacture=${product.manufacture}`} className={css.productManufactureLink}>
                                            {product.manufacture}
                                        </Link>
                                    </p>
                                ) : (
                                    ""
                                )}

                                <p className={css.productLabel}>Format:</p>

                                <p className={css.productDescription}>{product.format}</p>

                                <p className={css.productLabel}>Use for:</p>

                                <p className={css.productDescription}>{product.text}</p>

                                <p className={css.productLabel}>Note:</p>

                                {product.note.includes("\n") ? (
                                    <ul className={css.productNoteList}>
                                        {product.note.split("\n").map((item, index) => (
                                            <li key={index} className={css.productNoteItem}>
                                                <p className={css.productNoteItemText}>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={css.productDescription}>{product.note}</p>
                                )}

                                <div className={css.productPriceContainer}>
                                    <p className={css.productLabel}>Price:</p>

                                    <p className={css.productPrice}>${product.price}</p>
                                </div>

                                <div className={css.productBuyContainer}>
                                    <div className={css.productBuyQuantityContainer}>
                                        <button onClick={handleDecrease} className={css.productBuyQuantityBtn}>
                                            -
                                        </button>

                                        <input
                                            type="text"
                                            value={quantity}
                                            onChange={handleInputChange}
                                            className={css.productBuyQuantityInput}
                                        />

                                        <button onClick={handleIncrease} className={css.productBuyQuantityBtn}>
                                            +
                                        </button>
                                    </div>

                                    <button type="button" className={css.productBuyBtn} onClick={handleLikeClick}>
                                        <HeartIcon
                                            className={clsx(css.productBuyBtnLikeIcon, { [css.productBuyBtnLikeIconActive]: isLiked })}
                                        />
                                        {isLiked ? "Remove from Wishlist" : "To Wishlist"}
                                    </button>
                                </div>

                                <p className={css.productLabel}>Description:</p>

                                <p className={css.productDescription}>{product.description}</p>
                            </div>
                        </div>
                    ) : (
                        <div className={css.productNoDataContainer}>
                            <NoDataIcon className={css.productNoDataImg} />

                            <p className={css.productNoDataText}>Sorry, no product found for your request. Please try again later.</p>
                        </div>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Product;
