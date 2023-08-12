import axios from "axios";

export const userData = async (mode, apiData) => {
    const modeApi = {
        "userinfo" : {
            func : async (data) => {
                try {
                    const res = await axios.get(`/users?id=${data}`)

                    if(res.data) {
                        return res.data;
                    } else {
                        return false;
                    }
                } catch {
                    alert("[ERROR] UserInfo API Error.")
                }
            }
        },
        "payment" : {
            func : async (data) => {
                try {

                }
                axios.post("/payment", data)
                    .then(res => {
                        if(res.data) {
                            axios.post("/payment/success")
                                .then(res => {
                                    return res.data
                                })
                        } else {
                            return false;
                        }
                    })
                    .catch(err => alert("[ERROR] payment API error"));
            }
        }
    }

    try {
        return await modeApi[mode].func(apiData);
    } catch (error) {
        throw error;
    }
}