import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { selectWishlistItemById } from "../../redux/wishlist/selector";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlist/slice";

import HeartIcon from "../../images/heart.svg?react";

import css from "./CatalogItem.module.css";

const CatalogItem = ({ img, name, id, price }) => {
    const dispatch = useDispatch();
    const wishlistItem = useSelector(selectWishlistItemById(id));
    const [isLiked, setIsLiked] = useState(Boolean(wishlistItem));

    useEffect(() => {
        setIsLiked(Boolean(wishlistItem));
    }, [wishlistItem]);

    const handleLikeClick = (event) => {
        event.stopPropagation();
        event.preventDefault();

        setIsLiked((prev) => !prev);

        if (isLiked) {
            dispatch(removeFromWishlist({ id }));
        } else {
            dispatch(addToWishlist({ id, quantity: 1, name, price }));
        }
    };

    return (
        <Link to={`/product/${id}`} className={css.catalogItemLink}>
            <button type="button" className={css.catalogItemBtnLike} onClick={handleLikeClick}>
                <HeartIcon className={clsx(css.catalogItemBtnLikeIcon, { [css.catalogItemBtnLikeIconActive]: isLiked })} />
            </button>

            <img src={`https://test.wax-stake.com/img/${img}`} alt="name" className={css.catalogItemImg} />

            <p className={css.catalogItemText}>{name}</p>
        </Link>
    );
};

export default CatalogItem;
