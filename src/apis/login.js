import axios from "axios";

export const login = async (mode, apiData) => {
    const modeApi = {
        "login": {
            func: async (data) => {
                try {
                    const res = await axios.post("/login/loginTest", data);

                    if(res.data) {
                        return res.data;
                    } else {
                        return false;
                    }
                } catch {
                    alert("[ERROR] Login API Error.");
                }
            }
        },
        "duple": {
            func: async (data) => {
                try {
                    const res = await axios.post("/login/duple/id");

                    if(res.data) {
                        return res.data;
                    } else {
                        return false;
                    }
                } catch {
                    alert("[ERROR] Login Duple API Error.");
                }
            }
        },
        "searchId" : {
            func : async (data) => {
                try {
                    const res = await axios.post("/login/search/id", data);

                    if(res.data?.userId) {
                        return res.data.userId;
                    } else {
                        return false;
                    }
                } catch {
                    alert("[ERROR] SearchId API Error.");
                }
            }
        },
        "searchPw" : {
            func : async (data) => {

            }
        },
        "signup" : {
            func : async (data) => {
                try {
                    const res = await axios.post("/users/signup", data);

                    if(res?.data) {
                        return res.data;
                    }
                } catch {
                    alert("[ERROR] SignUp API Error.");
                }
            }
        },
        "emailCode" : {
            func : async (data) => {
                try {
                    const res = await axios.post("/api/mail/send", data, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if(res.data) {
                        return res.data;
                    } else {
                        return false;
                    }
                } catch {
                    alert("[ERROR] SearchPW API Error.");
                }
            }
        },
        "code" : {
            func : async (data) => {
                const res = await axios.post("/api/mail/check", data);

                if(res.data) {
                    return res.data;
                } else {
                    return false;
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