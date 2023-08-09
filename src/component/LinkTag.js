import { Link } from "react-router-dom";

import styles from "./LinkTag.module.css";

export const LinkTag = ({ mode }) => {
    const linkObj = {
        "idFind" : {
            style : styles.link,
            text : "아이디 찾기",
            link : "/login/search/id"
        },
        "pwFind" : {
            style : styles.link,
            text : "비밀번호 찾기",
            link : "/login/search/pw"
        },
        "signup" : {
            style : styles.signupLink,
            text : "회원 가입",
            link : "/users/signup"
        }
    };

    return (
        <Link to={linkObj[mode].link} className={linkObj[mode].style}>{linkObj[mode].text}</Link>
    )
}