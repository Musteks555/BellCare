import { Link } from "react-router-dom";

import css from "./BrandItem.module.css";

const BrandItem = ({ text }) => {
    return (
        <Link to={`/catalog?brand=${text}`} className={css.brandItemLink}>
            <p className={css.brandItemText}>{text}</p>
        </Link>
    );
};

export default BrandItem;
