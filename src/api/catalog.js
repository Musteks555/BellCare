import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchManufacturerByName = async (manufacturerName, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?manufacture=${manufacturerName}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching manufacturer data:", error);
        throw new Error("Failed to fetch manufacturer data");
    }
};

export const fetchCategoryByName = async (categoryName, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?category=${categoryName}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category data:", error);
        throw new Error("Failed to fetch category data");
    }
};

export const fetchBrandByName = async (brandName, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?brand=${brandName}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching brand data:", error);
        throw new Error("Failed to fetch brand data");
    }
};

export const fetchSearchResults = async (searchQuery, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?search=${searchQuery}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching search results:", error);
        throw new Error("Failed to fetch search results");
    }
};
