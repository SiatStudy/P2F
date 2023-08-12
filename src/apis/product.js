import axios from "axios";

export const product = async (mode, apiData) => {
    const modeApi = {
        "location" : {
            func : async (data) => {
                try {
                    return await axios.get(`/main/category?category=${data}`);
                } catch {
                    alert("[ERROR] Categories API Error.");
                }
            }
        },
        "locate" : {
            func : async (data) => {
                try {
                    return await axios.get(`/main/location?location=${data}`);
                } catch {
                    alert("[ERROR] Location API Error.");
                }
            }
        },
        "search" : {
            func : async (data) => {
                try {
                    return await axios.get(`/main/item?item=${data}`);
                } catch {
                    alert("[ERROR] SearchData API Error.");
                }
            }
        },
        "productInfo" : {
            func : async (data) => {
                try {
                    return await axios.get(`/main/product?product=${data}`)
                } catch {
                    alert("[ERROR] ProductData API Error.")
                }
            }
        }
    };

    try {
        return await modeApi[mode].func(apiData);
    } catch (error) {
        throw error;
    }
}