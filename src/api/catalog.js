import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchManufacturerByName = async (manufacturerName) => {
    try {
        const response = await axios.get(`${BASE_URL}?manufacture=${manufacturerName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer data:", error);
        throw new Error("Failed to fetch manufacturer data");
    }
};

export const fetchCategoryByName = async (categoryName) => {
    try {
        const response = await axios.get(`${BASE_URL}?category=${categoryName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category data:", error);
        throw new Error("Failed to fetch category data");
    }
};

export const fetchBrandByName = async (brandName) => {
    try {
        const response = await axios.get(`${BASE_URL}?brand=${brandName}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching brand data:", error);
        throw new Error("Failed to fetch brand data");
    }
};

export const fetchSearchResults = async (searchQuery) => {
    try {
        const response = await axios.get(`${BASE_URL}?search=${searchQuery}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching search results:", error);
        throw new Error("Failed to fetch search results");
    }
};
