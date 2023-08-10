import { faPhone, faCoins, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./RecommendContent.module.css";

export const RecommendContent = () => {
    const data = {
        tell : "033-677-7000",
        pay : "547,555",
        location : "강원도 강릉시 해안로 406번길 2"
    };

    return (
        <section className={styles.recommendSection}>
            <p className={styles.title}>다수의 이용 고객이 <span className={styles.nameTitle}>라한 씨마크 호텔 강릉</span>을(를) 추천해주었어요!</p>
            <div className={styles.recommendDiv}>
                <img src={`${process.env.PUBLIC_URL}/asset/img/main/MainPage_추천_img.jpg`} alt={"stay photo"} />
                <div className={styles.textList}>
                    <div className={styles.textDiv}>
                        <FontAwesomeIcon icon={faPhone} className={styles.recommendIcon} />
                        <div>
                            <p className={styles.textTitle}>예약 문의</p>
                            <p className={styles.text}>{data.tell}</p>
                        </div>
                    </div>
                    <div className={styles.textDiv}>
                        <FontAwesomeIcon icon={faCoins} className={styles.recommendIcon} />
                        <div>
                            <p className={styles.textTitle}>가격</p>
                            <p className={styles.text}>{data.pay}원 ~</p>
                        </div>
                    </div>
                    <div className={styles.textDiv}>
                        <FontAwesomeIcon icon={faMap} className={styles.recommendIcon} />
                        <div>
                            <p className={styles.textTitle}>주소</p>
                            <p className={styles.text}>{data.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}