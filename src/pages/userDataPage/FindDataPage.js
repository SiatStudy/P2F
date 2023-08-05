import { FindDataContent } from "../../content/userDataContent/FindDataContent";

import styles from "./FindDataPage.module.css"

export const FindDataPage = () => {
    return (
        <section>
            <div className={styles.findContainer}>
                <FindDataContent />
            </div>
        </section>
    )
}