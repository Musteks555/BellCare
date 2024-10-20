import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import HeartIcon from "../../images/heart.svg?react";

import css from "./BestsellersItem.module.css";

const BestsellersItem = ({ img, name, id }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsLiked((prev) => !prev);
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
