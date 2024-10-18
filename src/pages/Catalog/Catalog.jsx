import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchBrandByName, fetchCategoryByName, fetchManufacturerByName, fetchSearchResults } from "../../api/catalog";

import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import CatalogItem from "../../components/CatalogItem/CatalogItem";

import css from "./Catalog.module.css";

const Catalog = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const manufacturer = params.get("manufacture");
        const category = params.get("category");
        const brand = params.get("brand");
        const search = params.get("search");

        if (manufacturer) {
            setLoading(true);
            fetchManufacturerByName(manufacturer)
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch manufacturer data:", error);
                    setLoading(false);
                });
        } else if (category) {
            setLoading(true);
            fetchCategoryByName(category)
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch category data:", error);
                    setLoading(false);
                });
        } else if (brand) {
            setLoading(true);
            fetchBrandByName(brand)
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch brand data:", error);
                    setLoading(false);
                });
        } else if (search) {
            setLoading(true);
            fetchSearchResults(search)
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Failed to fetch search results:", error);
                    setLoading(false);
                });
        } else {
            setData(null);
            setLoading(false);
        }
    }, [location.search]);

    return (
        <section className={css.catalog}>
            <Container>
                {loading ? (
                    <Loader />
                ) : data ? (
                    <>
                        {console.log(data)}
                        <ul className={css.catalogList}>
                            {data.map((item) => {
                                return (
                                    <li key={item.id} className={css.catalogItem}>
                                        <CatalogItem img={item.img} name={item.name} />
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                ) : (
                    <p>No data available.</p>
                )}
            </Container>
        </section>
    );
};

export default Catalog;
