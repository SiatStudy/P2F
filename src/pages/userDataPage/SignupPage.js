import { TitleTag } from "../../component/TitleTag";
import {SignupContent} from "../../content/userDataContent/SignupContent";

import styles from "./SignupPage.module.css"

export const SignupPage = () => {
    return (
        <section>
            <div className={styles.signupContainer}>
                <TitleTag mode={"signup"} />
                <SignupContent />
            </div>
        </section>
    )
}