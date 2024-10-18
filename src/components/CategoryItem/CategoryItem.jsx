import { Link } from "react-router-dom";

import css from "./CategoryItem.module.css";

const CategoryItem = ({ icon: Icon, text }) => {
    return (
        <Link to={`/catalog?category=${text}`} className={css.categoryItemLink}>
            <div className={css.categoryItemImgContainer}>
                <Icon className={css.categoryItemImg} />
            </div>

            <p className={css.categoryItemText}>{text}</p>
        </Link>
    );
};

export default CategoryItem;
