import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchProducts = async (arrId) => {
    try {
        const response = await axios.post(`${BASE_URL}`, { addId: arrId });
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};
