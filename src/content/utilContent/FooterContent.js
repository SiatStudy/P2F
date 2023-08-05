import {Logo} from "../../component/Logo";

import styles from "./FooterContent.module.css";

export const FooterContent = () => {
    return (
        <footer>
            <div className={styles.footerHead}>
                <Logo mode={true} sizeMode={"big"} />
                <ul className={styles.footerHeadNav}>
                    <li>Socials</li>
                    <li>Community</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.footerFoot}>
                <p>&copy; 2023 SIAT Programing class's A. All rights reserved</p>
                <ul className={styles.footerFootNav}>
                    <li>Privacy & Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </footer>
    )
}