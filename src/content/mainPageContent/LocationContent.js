import { BtnTag } from "../../component/BtnTag";
import { TitleTag } from "../../component/TitleTag";

import styles from "./LocationContent.module.css";

export const LocationContent = () => {
    const location = ["서울", "경기", "부산", "제주", "강원", "전라", "경상"];

    return (
        <section className={styles.locationSection}>
            <TitleTag mode={"location"}></TitleTag>
            <p className={styles.sectionTitle}>Location</p>
            <div className={styles.locationDiv}>
                { location.map(locate => {
                    return <BtnTag data={locate} type={"shortBtn"} mode={"locationBtn"} event={() => alert("라우터 구현중입니다.")} />
                })}
            </div>
        </section>
    )
}