import { BtnTag } from "../../component/BtnTag";
import styles from "./SocialBtn.module.css";

export const SocialBtn = () => {
    return (
        <div className={styles.socialContainer}>
            <BtnTag type={"longBtn"} mode={"naver"} />
            <BtnTag type={"longBtn"} mode={"kakao"} />
        </div>
    )
}