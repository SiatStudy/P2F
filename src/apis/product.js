import axios from "axios";

export const product = (mode, apiData) => {
    const modeApi = {
        "location" : {
            func : (data) => {
                axios.get(`/main/category?category=${data}`)
                    .then(res => {
                        return res;
                    })
                    .catch(err => alert("[ERROR] categories API error"));
            }
        },
        "locate" : {
            func : (data) => {
                axios.get(`/main/location?location=${data}`)
                    .then(res => {
                        return res.data;
                    })
                    .catch(err => alert("[ERROR] location API error"))
            }
        },
        "search" : {
            func : (data) => {
                axios.get(`/main/item?item=${data}`)
                    .then(res => {
                        return res.data;
                    })
                    .catch(err => alert("[ERROR] search API error"));
            }
        },
        "productInfo" : {
            func : (data) => {
                axios.get(`/main/product?product=${data}`)
                    .then(res => {
                        return res.data;
                    })
                    .catch(err => alert("[ERROR] productInfo API error"));
            }
        }
    };

    return modeApi[mode].func(apiData);
}