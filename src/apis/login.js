import axios from "axios";

export const login = async (mode, apiData) => {

    const modeApi = {
        "login" : {
            func : (data) => {
                axios.post("/login/login", data)
                    .then(res => {
                        if(res.success) {
                            return res.result.sectionId;
                        } else {
                            alert("아이디와 비밀번호가 틀렸습니다.");
                        }
                    })
                    .catch(err => {
                        alert("[ERROR] Login API error");
                    })
            }
        },
        "duple" : {
            func : (data) => {
                axios.post("/login/duple", data)
                    .then(res => {
                        if(res.success) {
                            return !res.result.isExist;
                        }
                    })
                    .catch(err => {
                        alert("[ERROR] Login Duple API error");
                    })
            }
        },
        "searchId" : {
            func : (data) => {
                axios.post("/login/search/id", data)
                    .then(res => {
                        if(res.success) {
                            return res.result.userAccountId;
                        }
                    })
                    .catch(err => {
                        alert("[ERROR] Login search ID API error")
                    })
            }
        },
        "searchPw" : {
            func : (data) => {
                axios.post("/login/search/password", data)
                    .then(res => {
                        return res.success;
                    })
                    .catch(err => {
                        alert("[ERROR} Login search PW API error");
                    })
            }
        },
        "signup" : {
            func : (data) => {
                axios.post("/users/signup", data)
                    .then(res => {
                        return res.success;
                    })
                    .catch(err => alert("[ERROR] SignUp API error"));
            }
        },
        "emailCode" : {
            func : (data) => {
                axios.post("/api/mail/send", data)
                    .then(res => {
                        return res.success;
                    })
                    .catch(err => alert("[ERROR] emailCode API error"))
            }
        },
        "code" : {
            func : (data) => {
                axios.post("/api/mail/check", data)
                    .then(res => {
                        return res.success;
                    })
                    .catch(err => alert("[ERROR] code API error"));
    }
        }
    }

    return modeApi[mode].func(apiData);
}