import styles from "./BtnTag.module.css";

export const BtnTag = ({ type, mode, data, isdisabled, event, selected }) => {
    const btnObj = {
        "longBtn" : {
            "pwFind" : {
                style : styles.longBtn,
                type : "submit",
                text : "비밀번호 찾기"
            },
            "idFind" : {
                style : styles.longBtn,
                type : "submit",
                text : "ID 찾기"
            },
            "pwChange" : {
                style : styles.longBtn,
                type : "submit",
                text : "비밀번호 변경"
            },
            "login" : {
                style : styles.longBtn,
                type : "submit",
                text : "로그인"
            },
            "toLogin" : {
                style : styles.longBtn,
                type : "button",
                text : "로그인 하러가기"
            },
            "signup" : {
                style : styles.longBtn,
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
            },
            "locationBtn" : {
                style : styles.locationBtn,
                type : "button",
                text : `${data}`,
                src : `${process.env.PUBLIC_URL}/asset/img/main/MainPage_지역별_${data}.png`
            },
            "categoryBtn" : {
                style : selected ? styles.selectedCategoryBtn : styles.noneCategoryBtn,
                type : "button",
                text : `${data}`
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
                    style={btnObj[type][mode].src ? { backgroundImage:`url(${btnObj[type][mode].src })`} : null}
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