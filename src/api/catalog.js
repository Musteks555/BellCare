import axios from "axios";

const BASE_URL = "https://test.wax-stake.com/";

export const fetchManufacturerByName = async (manufacturerName, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?manufacture=${manufacturerName}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};

export const fetchCategoryByName = async (categoryName, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?category=${categoryName}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};

export const fetchBrandByName = async (brandName, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?brand=${brandName}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};

export const fetchSearchResults = async (searchQuery, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}?search=${searchQuery}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
        throw new Error("Failed to fetch");
    }
};

export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}?id=${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw new Error("Failed to fetch");
    }
};
