import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchBestsellers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}?best`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};
