import { Link } from "react-router-dom";

import css from "./ManufacturersItem.module.css";

const ManufacturerItem = ({ text, path }) => {
    return (
        <Link to={path} className={css.manufacturerItemLink}>
            <p className={css.manufacturerItemText}>{text}</p>
        </Link>
    );
};

export default ManufacturerItem;
