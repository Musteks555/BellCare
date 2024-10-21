import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { fetchBestsellers } from "../../api/bestsellers";

import BestsellersItem from "../BestsellersItem/BestsellersItem";
import Loader from "../Loader/Loader";

import css from "./Bestsellers.module.css";

const Bestsellers = () => {
    const [bestsellers, setBestsellers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadBestsellers = async () => {
            setLoading(true);
            try {
                const data = await fetchBestsellers();
                const shuffledBestsellers = data.items.sort(() => Math.random() - 0.5);
                setBestsellers(shuffledBestsellers);
            } catch (err) {
                console.log("Failed to fetch bestsellers", err);
                toast.error("Failed to load data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadBestsellers();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Toaster />

            <ul className={css.bestsellersList}>
                {bestsellers.map((item) => (
                    <li key={item.id} className={css.bestsellersItem}>
                        <BestsellersItem id={item.id} name={item.name} img={item.img} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Bestsellers;
