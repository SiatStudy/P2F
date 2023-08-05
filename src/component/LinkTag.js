import { Link } from "react-router-dom";

import styles from "./LinkTag.module.css";

export const LinkTag = ({ mode }) => {
    const linkObj = {
        "idFind" : {
            text : "아이디 찾기",
            link : "#"
        },
        "pwFind" : {
            text : "비밀번호 찾기",
            link : "#"
        },
        "userJoin" : {
            text : "회원 가입",
            link : "#"
        }
    };

    return (
        <p to={linkObj[mode].link}>{linkObj[mode].text}</p>
    )
}