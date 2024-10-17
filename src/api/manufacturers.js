import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchManufacturerByName = async (manufacturerName) => {
    try {
        const response = await axios.get(`${BASE_URL}?manufacturers=${manufacturerName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer data:", error);
        throw new Error("Failed to fetch manufacturer data");
    }
};
