import { useNavigate } from "react-router-dom";

import { BtnTag } from "../../component/BtnTag";
import { TitleTag } from "../../component/TitleTag";

import styles from "./UserContent.module.css";

export const UserContent = () => {
    const history = useNavigate();
    const myData = [
        {
            text : "회원 정보",
            link : "/user/info"
        },
        {
            text : "결제 내역",
            link : "/user/payhistory"
        },
        {
            text : "검색 내역",
            link : "/search/default"
        },
        {
            text : "이벤트",
            link : "/event"
        },
        {
            text : "찜",
            link : "/user/like"
        }];

    return (
        <div className={styles.userPageDiv}>
            <TitleTag mode={"MyPageTitle"} />
            <div className={styles.userBtnDiv}>
                {myData.map(( {text, link}, index ) => ( <BtnTag type={"shortBtn"} mode={"mypageBtn"} data={text}  event={() => history(link)} /> ))}
            </div>
        </div>
    )
}