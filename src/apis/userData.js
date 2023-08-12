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
                    alert("[ERROR] UserInfo API Error.");
                }
            }
        },
        "payment" : {
            func : async (data) => {
                try {
                    const res = await axios.post("/payment", data)

                    if(res.data) {
                        return true;
                    } else {
                        return false;
                    }
                } catch {
                    alert("[ERROR] payment API Error.");
                }
            }
        },
        "paycheck" : {
            func : async (data) => {
                try {
                    const res = await axios.post("/")
                } catch {
                    alert("[ERROR] paymentCheck API Error.");
                }
            }
        }
    }

    try {
        return await modeApi[mode].func(apiData);
    } catch (error) {
        throw error;
    }
}