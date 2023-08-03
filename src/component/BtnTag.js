import styles from "./BtnTag.module.css";

export const BtnTag = ({ type, mode, isdisabled, event }) => {
    const btnObj = {
        "longBtn" : {
            style : styles.longBtn,
            "pwFind" : {
                text : "비밀번호 찾기"
            },
            "idFind" : {
                text : "ID 찾기"
            },
            "pwChange" : {
                text : "비밀번호 변경"
            },
            "login" : {
                text : "로그인"
            },
            "toLogin" : {
                text : "로그인 하러가기"
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

        }
    };

    return (
        <>
            {btnObj[type][mode].icon ? (
                <button type={"submit"} className={btnObj[type][mode].style} onClick={btnObj[type][mode].func}>
                    <img src={`${process.env.PUBLIC_URL}/asset/icon/${btnObj[type][mode].icon}`} alt={"icon Img"} />
                    <p>{btnObj[type][mode].text}</p>
                </button>
            ) : (
                <button
                    type={"submit"}
                    className={btnObj[type].style}
                    disabled={isdisabled}
                    onClick={event}
                >
                    {btnObj[type][mode].text}
                </button>
            )}
        </>
    )
}