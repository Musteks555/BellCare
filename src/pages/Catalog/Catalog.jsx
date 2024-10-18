import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchBrandByName, fetchCategoryByName, fetchManufacturerByName, fetchSearchResults } from "../../api/catalog";

import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import Pagination from "../../components/Pagination/Pagination";

import css from "./Catalog.module.css";

const Catalog = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const manufacturer = params.get("manufacture");
        const category = params.get("category");
        const brand = params.get("brand");
        const search = params.get("search");

        setLoading(true);
        let fetchData;

        if (manufacturer) {
            fetchData = fetchManufacturerByName(manufacturer, currentPage);
        } else if (category) {
            fetchData = fetchCategoryByName(category, currentPage);
        } else if (brand) {
            fetchData = fetchBrandByName(brand, currentPage);
        } else if (search) {
            fetchData = fetchSearchResults(search, currentPage);
        } else {
            setData(null);
            setLoading(false);
            return;
        }

        fetchData
            .then((data) => {
                setData(data.items);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch data:", error);
                setLoading(false);
            });
    }, [location.search, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return (
        <section className={css.catalog}>
            <Container>
                {loading ? (
                    <Loader />
                ) : data ? (
                    <>
                        <ul className={css.catalogList}>
                            {data.map((item) => (
                                <li key={item.id} className={css.catalogItem}>
                                    <CatalogItem img={item.img} name={item.name} />
                                </li>
                            ))}
                        </ul>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handlePageChange={handlePageChange}
                            handlePreviousPage={handlePreviousPage}
                            handleNextPage={handleNextPage}
                        />
                    </>
                ) : (
                    <p>No data available.</p>
                )}
            </Container>
        </section>
    );
};

export default Catalog;
