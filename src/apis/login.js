import axios from "axios";

export const login = async (mode, apiData) => {
    const modeApi = {
        "login" : {
            func : (data) => {
                axios.post("/login/login", data)
                    .then(res => {
                        if(res.data.isValid) {
                            return res.data.userId;
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
                axios.post("/login/duple", { params : data })
                    .then(res => {
                        if(res.data) {
                            return !res.data;
                        }
                    })
                    .catch(err => {
                        alert("[ERROR] Login Duple API error");
                    })
            }
        },
        "searchId" : {
            func : (data) => {
                axios.post("/login/search/id", { params : data })
                    .then(res => {
                        if(res.data?.userId) {
                            return res.data.userId;
                        } else {
                            throw Error("none userId");
                        }
                    })
                    .catch(err => {
                        alert("[ERROR] Login search ID API error")
                    })
            }
        },
        "searchPw" : {
            func : (data) => {
                axios.post("/login/search/password", { params : data })
                    .then(res => {
                        if(res.data?.userPw) {
                            return res.data.userPw;
                        }
                    })
                    .catch(err => {
                        alert("[ERROR} Login search PW API error");
                    })
            }
        },
        "signup" : {
            func : (data) => {
                axios.post("/users/signup", { params : data })
                    .then(res => {
                        return res.data;
                    })
                    .catch(err => alert("[ERROR] SignUp API error"));
            }
        },
        "emailCode" : {
            func : (data) => {
                const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

                axios.post("/api/mail/send", {
                        address : data.useremail,
                        title : "Email check code",
                        content : `회원 가입을 위한 인증 코드는 ${verificationCode} 입니다.`
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(res => {
                        return res.data;
                    })
                    .catch(err => alert("[ERROR] emailCode API error"))
            }
        },
        // "code" : {
        //     func : (data) => {
        //         axios.post("/api/mail/check", { params : data })
        //             .then(res => {
        //                 return res.success;
        //             })
        //             .catch(err => alert("[ERROR] code API error"));
        //     }
        // }
    }

    return modeApi[mode].func(apiData);
}