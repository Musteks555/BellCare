import { Link } from "react-router-dom";

import css from "./ManufacturersItem.module.css";

const ManufacturerItem = ({ text }) => {
    return (
        // <Link to={`/catalog?manufacturers=${text}`} className={css.manufacturerItemLink}>
        <Link to={"/"} className={css.manufacturerItemLink}>
            <p className={css.manufacturerItemText}>{text}</p>
        </Link>
    );
};

export default ManufacturerItem;
