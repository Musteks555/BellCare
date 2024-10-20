import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchSearchResults = async (searchQuery, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?search=${searchQuery}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};
