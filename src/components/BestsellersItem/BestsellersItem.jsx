import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { selectWishlistItemById } from "../../redux/wishlist/selector";
import { addToWishlist, removeFromWishlist } from "../../redux/wishlist/slice";

import HeartIcon from "../../images/heart.svg?react";

import css from "./BestsellersItem.module.css";

const BestsellersItem = ({ img, name, id }) => {
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
            dispatch(addToWishlist({ id, quantity: 1 }));
        }
    };

    return (
        <Link to={`/product/${id}`} className={css.bestsellersItemLink}>
            <button type="button" className={css.bestsellersItemBtnLike} onClick={handleLikeClick}>
                <HeartIcon className={clsx(css.bestsellersItemBtnLikeIcon, { [css.bestsellersItemBtnLikeIconActive]: isLiked })} />
            </button>

            <img src={`https://test.wax-stake.com/img/${img}`} alt="name" className={css.bestsellersItemImg} />

            <p className={css.bestsellersItemText}>{name}</p>
        </Link>
    );
};

export default BestsellersItem;
