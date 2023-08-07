import { BtnTag } from "./BtnTag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./CardOfProduct.module.css";

export const CardOfProduct = ({ key, item, data }) => {
    const imgObj = {
        src: `${item}`,
        className: `${styles.stayImg}`,
    };

    const textData = {
        star: data.star,
        name: data.name,
        location: data.location,
        pay: data.pay,
    };

    return (
        <div key={key} className={styles.cardOfProduct}>
            <img {...imgObj} alt={"stay Photo"}/>
            <div className={styles.cardUi}>
                <div>
                    <p className={styles.starText}>
                        <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                        {textData.star}
                    </p>
                    <p className={styles.locationText}>
                        {textData.location} {textData.name}
                    </p>
                    <p className={styles.payText}>
                        {textData.pay} ~ / 1박
                    </p>
                </div>
                <BtnTag type={"shortBtn"} mode={"bookBtn"} event={() => alert("라우터 구현중")}/>
            </div>
        </div>
    );
};
