import axios from "axios";

export const userData = (mode, apiData) => {
    const modeApi = {
        "userinfo" : {
            func : (data) => {
                axios.get(`/users?id=${data}`)
                    .then(res => {
                        return res.data;
                    })
                    .catch(err => alert("[ERROR] userInfo API error"));
            }
        },
        "payment" : {
            func : (data) => {
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

    return modeApi[mode].func(apiData);
}