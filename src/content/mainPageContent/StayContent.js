import { useState } from "react";

import { CardOfProduct } from "../../component/CardOfProduct";
import { Label2Tag } from "../../component/Label2Tag";
import { TitleTag } from "../../component/TitleTag";

import { stayJson } from "../../json/stayJson";

import styles from "./StayContent.module.css"

export const StayContent = () => {
    const [ selectData, setSelectData ] = useState("모텔");
    const stay = ["모텔", "호텔", "게스트 하우스", "펜션"];

    return (
        <section className={styles.mainProductSection}>
            <TitleTag mode={"stay"} />
            <div className={styles.contentDiv}>
                <Label2Tag data={stay} selectData={selectData} setSelectData={setSelectData} />
                <div className={styles.productList}>
                    { stayJson.map(({ title, src, text}, index) => {
                        let count = 0;
                        if(title === selectData && count > 3) {
                            count++;
                            return <CardOfProduct key={index} item={src} data={text} />
                        }
                    }) }
                </div>
            </div>
        </section>
    )
}