import styles from "./TitleTag.module.css";

export const TitleTag = ({ mode }) => {
    const textObj = {
        "email" : {
            style : styles.title,
            text : "이메일 인증"
        },
        "login" : {
            style : styles.title,
            text : "로그인"
        },
        "signup" : {
            style : styles.title,
            text : "회원가입"
        },
        "location" : {
            style : styles.sectionText,
            text : "여행을 시작, 어디로 여행가시겠습니까?"
        },
        "stay" : {
            style : styles.sectionText,
            text : "여행의 휴식 어느 곳에서 쉬시겠습니까?"
        }
    };

    return (
        <p className={textObj[mode].style} >{textObj[mode].text}</p>
    )
};