import { Link } from "react-router-dom";

import css from "./HeaderModalItem.module.css";

const HeaderModalItem = ({ result, setIsModalOpen }) => {
    return (
        <Link to={`/product/${result.id}`} onClick={() => setIsModalOpen(false)} className={css.headerSearchResultItemLink}>
            <img src={`https://test.wax-stake.com/img/${result.img}`} alt={result.name} className={css.headerSearchResultItemImg} />

            <p className={css.headerSearchResultItemText}>{result.name}</p>
        </Link>
    );
};

export default HeaderModalItem;
