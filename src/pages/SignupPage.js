import { TitleTag } from "../component/TitleTag";
import {SignupContent} from "../content/SignupContent";

import styles from "./SignupPage.module.css"

export const SignupPage = () => {
    return (
        <div className={styles.mainContainer}>
            <TitleTag mode={"signup"} />
            <SignupContent />
        </div>
    )
}