import { Link } from "react-router-dom";

import styles from "./LinkTag.module.css";

export const LinkTag = ({ mode }) => {
    const linkObj = {
        "idFind" : {
            style : styles.find,
            text : "아이디 찾기",
            link : "#"
        },
        "pwFind" : {
            style : styles.find,
            text : "비밀번호 찾기",
            link : "#"
        },
        "userJoin" : {
            style : styles.join,
            text : "회원 가입",
            link : "#"
        }
    };

    return (
        <p to={linkObj[mode].link} className={linkObj[mode].style}>{linkObj[mode].text}</p>
    )
}