import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { fetchProductById } from "../../api/catalog";

import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./Product.module.css";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchProductById(id)
            .then((data) => {
                setProduct(data.items[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch product data:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <DocumentTitle>Buy {product.name}</DocumentTitle>

            <section className={css.product}>
                <Container>
                    {product ? (
                        <div className={css.productContainer}>
                            <img src={`https://test.wax-stake.com/img/${product.img}`} alt={product.name} className={css.productImg} />

                            <h1 className={css.productName}>{product.name}</h1>
                            {console.log(product.manufacture)}
                            {product.manufacture ? (
                                <p className={css.productManufacture}>
                                    See more by{" "}
                                    <Link to={`/catalog?category=${product.manufacture}`} className={css.productManufactureLink}>
                                        {product.manufacture}
                                    </Link>
                                </p>
                            ) : (
                                ""
                            )}

                            <p className={css.productLabel}>Format</p>

                            <p className={css.productDescription}>{product.format}</p>

                            <p className={css.productLabel}>Use for</p>

                            <p className={css.productDescription}>{product.text}</p>

                            <p className={css.productLabel}>Note</p>

                            <p className={css.productDescription}>{product.note}</p>

                            <div className={css.productPriceContainer}>
                                <p className={css.productLabel}>Price</p>

                                <p className={css.productPrice}>{product.price}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Product not found</p>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Product;
