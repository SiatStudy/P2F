import { BtnTag } from "./BtnTag";

import styles from "./CardOfSwiper.module.css";

export const CardOfSwiper = ({ data, key }) => {
    return (
        <div
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/asset/img/main/${data.img})`}}
            className={styles.SwiperImg}
            key={key}
        >
            <div className={styles.textDiv}>
                <p>{data.text1}</p>
                <p>{data.text2}</p>
            </div>
            <div className={styles.btnDiv}>
                <p>이 숙도를 보고 당장 예약하고 싶다면?</p>
                <BtnTag type={"shortBtn"} mode={"bookBtn"} event={() => alert("라우터 구현중입니다.")} />
            </div>
        </div>
    )
}