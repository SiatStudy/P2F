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
        },
        "locationTitle" : {
            style : styles.pageTitle,
            text : "지역 종류"
        },
        "StayTitle" : {
            style : styles.pageTitle,
            text : "숙소 종류"
        },
        "LikeTitle" : {
            style : styles.pageTitle,
            text : "찜한 목록"
        },
        "PayHistoryTitle" : {
            style : styles.pageTitle,
            text : "결제 내역"
        },
        "PayTitle" : {
            style : styles.pageTitle,
            text : "결제"
        },
        "SearchTitle" : {
            style : styles.pageTitle,
            text : "검색 결과"
        },
        "MyPageTitle" : {
            style : styles.pageTitle,
            text : "마이페이지"
        },
        "UserTitle" : {
            style : styles.pageTitle,
            text : "회원 정보"
        },
        "VersionTitle" : {
            style : styles.pageTitle,
            text : "버전"
        },
        "stayUse" : {
            style : styles.contentTitle,
            text : "호텔 내 사용 가능 여부"
        },
        "stayProduct" : {
            style : styles.contentTitle,
            text : "호텔 내 이용 가능 안내"
        },
        "stayLocation" : {
            style : styles.contentTitle,
            text : "호텔 위치"
        }
    };

    return (
        <p className={textObj[mode].style} >{textObj[mode].text}</p>
    )
};