import styles from "./BtnTag.module.css";

export const BtnTag = ({ type, mode, isdisabled, event }) => {
    const btnObj = {
        "longBtn" : {
            style : styles.longBtn,
            "pwFind" : {
                type : "submit",
                text : "비밀번호 찾기"
            },
            "idFind" : {
                type : "submit",
                text : "ID 찾기"
            },
            "pwChange" : {
                type : "submit",
                text : "비밀번호 변경"
            },
            "login" : {
                type : "submit",
                text : "로그인"
            },
            "toLogin" : {
                type : "button",
                text : "로그인 하러가기"
            },
            "signup" : {
                type : "submit",
                text : "회원 가입"
            },
            "naver" : {
                style : styles.naverBtn,
                icon : "naverLogo.svg",
                text : "네이버 로그인",
                func : () => {
                    alert("구현중입니다.");
                }
            },
            "kakao" : {
                style : styles.kakaoBtn,
                icon : "kakaoLogo.svg",
                text : "카카오 로그인",
                func : () => {
                    alert("구현중입니다.");
                }
            }
        },
        "shortBtn" : {
            "dupleBtn" : {
                style : styles.shortBtn,
                type : "button",
                text : "중복"
            },
            "reqBtn" : {
                style : styles.shortBtn,
                type : "button",
                text : "요청"
            },
            "checkBtn" : {
                style : styles.shortBtn,
                type : "button",
                text : "확인"
            },
            "bookBtn" : {
                style : styles.smallBtn,
                type : "button",
                text : "예약하기"
            }
        }
    };

    return (
        <>
            {btnObj[type][mode].icon ? (
                <button type={"button"} className={btnObj[type][mode].style} onClick={btnObj[type][mode].func}>
                    <img src={`${process.env.PUBLIC_URL}/asset/icon/${btnObj[type][mode].icon}`} alt={"icon Img"} />
                    <p>{btnObj[type][mode].text}</p>
                </button>
            ) : (
                <button
                    type={btnObj[type][mode].type}
                    className={btnObj[type][mode].style}
                    disabled={isdisabled}
                    onClick={event}
                >
                    {btnObj[type][mode].text}
                </button>
            )}
        </>
    )
}