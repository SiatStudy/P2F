import { TitleTag } from "../component/TitleTag";
import { LoginContent } from "../content/LoginContent";
import { SocialBtn } from "../content/SocialBtn";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    return (
        <div className={styles.mainContainer}>
            <TitleTag mode={"login"} />
            <LoginContent />
            <p className={styles.orLine}>------------------ or ------------------</p>
            <SocialBtn />
        </div>
    )
}