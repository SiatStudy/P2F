import { TitleTag } from "../../component/TitleTag";
import { LoginContent } from "../../content/userDataContent/LoginContent";
import { SocialBtn } from "../../content/userDataContent/SocialBtn";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    return (
        <section>
            <div className={styles.loginContainer}>
                <TitleTag mode={"login"} />
                <LoginContent />
                <p className={styles.orLine}>------------------ or ------------------</p>
                <SocialBtn />
            </div>
        </section>
    )
}