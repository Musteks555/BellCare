import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchBrandByName, fetchCategoryByName, fetchManufacturerByName, fetchSearchResults } from "../../api/catalog";

import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import Pagination from "../../components/Pagination/Pagination";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Catalog.module.css";

const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
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
        const page = parseInt(searchParams.get("page"), 10) || 1;

        setCurrentPage(page);
        setLoading(true);
        let fetchData;

        if (manufacturer) {
            fetchData = fetchManufacturerByName(manufacturer, page);
        } else if (category) {
            fetchData = fetchCategoryByName(category, page);
        } else if (brand) {
            fetchData = fetchBrandByName(brand, page);
        } else if (search) {
            fetchData = fetchSearchResults(search, page);
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
    }, [searchParams]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setSearchParams((prevParams) => {
            const updatedParams = new URLSearchParams(prevParams);
            updatedParams.set("page", page.toString());
            return updatedParams;
        });
    };

    return (
        <>
            <DocumentTitle>Catalog</DocumentTitle>

            <section className={css.catalog}>
                <Container>
                    {loading ? (
                        <Loader />
                    ) : data ? (
                        <>
                            <ul className={css.catalogList}>
                                {data.map((item) => (
                                    <li key={item.id} className={css.catalogItem}>
                                        <CatalogItem img={item.img} name={item.name} id={item.id} />
                                    </li>
                                ))}
                            </ul>

                            <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
                        </>
                    ) : (
                        <p>No data available.</p>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Catalog;
