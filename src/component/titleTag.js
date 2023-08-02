export const TitleTag = ({ mode }) => {
    const textObj = {
        "email" : {
            text : "이메일 인증"
        },
        "login" : {
            text : "로그인"
        },
        "join" : {
            text : "회원가입"
        }
    };

    return (
        <p className={"title"} >{textObj[mode].text}</p>
    )
};