import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import HeartIcon from "../../images/heart.svg?react";

import css from "./CatalogItem.module.css";

const CatalogItem = ({ img, name }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsLiked((prev) => !prev);
    };

    return (
        <Link className={css.catalogItemLink}>
            <button type="button" className={css.catalogItemBtnLike} onClick={handleLikeClick}>
                <HeartIcon className={clsx(css.catalogItemBtnLikeIcon, { [css.catalogItemBtnLikeIconActive]: isLiked })} />
            </button>

            <img src={`https://test.wax-stake.com/img/${img}`} alt="name" className={css.catalogItemImg} />

            <p className={css.catalogItemText}>{name}</p>
        </Link>
    );
};

export default CatalogItem;
