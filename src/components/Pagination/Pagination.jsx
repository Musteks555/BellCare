import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import css from "./Pagination.module.css";
import clsx from "clsx";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const maxPagesToShow = 3;

    const getPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
        let endPage = startPage + maxPagesToShow - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        totalPages > 1 && (
            <div className={css.pagination}>
                {currentPage > 1 && (
                    <button className={css.paginationButton} onClick={() => handlePageChange(currentPage - 1)}>
                        <FaArrowLeft className={css.paginationArrow} />
                    </button>
                )}

                {pages[0] > 1 && (
                    <>
                        <button className={css.paginationButton} onClick={() => handlePageChange(1)}>
                            1
                        </button>
                        {pages[0] > 2 && <span className={css.paginationEllipsis}>...</span>}
                    </>
                )}

                {pages.map((page) => (
                    <button
                        key={page}
                        className={currentPage === page ? clsx(css.paginationButtonActive, css.paginationButton) : css.paginationButton}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {pages[pages.length - 1] < totalPages && (
                    <>
                        {pages[pages.length - 1] < totalPages - 1 && <span className={css.paginationEllipsis}>...</span>}
                        <button className={css.paginationButton} onClick={() => handlePageChange(totalPages)}>
                            {totalPages}
                        </button>
                    </>
                )}

                {currentPage < totalPages && (
                    <button className={css.paginationButton} onClick={() => handlePageChange(currentPage + 1)}>
                        <FaArrowRight className={css.paginationArrow} />
                    </button>
                )}
            </div>
        )
    );
};

export default Pagination;
