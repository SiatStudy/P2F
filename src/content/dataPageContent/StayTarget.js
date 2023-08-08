import { BtnTag } from "../../component/BtnTag";
import { TitleTag } from "../../component/TitleTag";

import styles from "./LocationTarget.module.css";

export const StayTarget = ({ selected, setEvent }) => {
    const categories = ["모텔", "호텔", "게스트 하우스", "펜션"];

    return (
        <div className={styles.targetTitle}>
            <TitleTag mode={"locationTitle"} />
            <div className={styles.itemsList}>
                {categories.map((item, index) => (
                    <BtnTag type={"shortBtn"} mode={"categoryBtn"} event={({ target }) => setEvent(target.innerText.toString())} data={item} selected={ selected === item } />
                ))}
            </div>
        </div>
    )
}