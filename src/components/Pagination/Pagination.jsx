import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import css from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, handlePageChange, handlePreviousPage, handleNextPage }) => {
    const maxVisiblePages = 3;

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return (
        <div className={css.pagination}>
            <button onClick={handlePreviousPage} className={css.paginationButton} disabled={currentPage === 1}>
                <FaArrowLeft className={css.paginationArrow} />
            </button>

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                const pageNumber = startPage + index;
                return (
                    <button
                        key={pageNumber}
                        className={`${css.paginationButton} ${pageNumber === currentPage ? css.active : ""}`}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            <button onClick={handleNextPage} className={css.paginationButton} disabled={currentPage === totalPages}>
                <FaArrowRight className={css.paginationArrow} />
            </button>
        </div>
    );
};

export default Pagination;
