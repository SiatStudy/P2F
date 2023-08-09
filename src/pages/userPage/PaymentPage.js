import { BtnTag } from "../../component/BtnTag";
import { TitleTag } from "../../component/TitleTag";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./PaymentPage.module.css";

export const PaymentPage = () => {
    const data = {
        name : "SR 호텔 서울 마곡",
        pay : 300000
    }
    return (
        <div>
            <HeaderNav headerMode={false} />
            <div className={styles.contentDiv}>
                <TitleTag mode={"PayTitle"} />
                <div className={styles.payContent}>
                    <img src={`${process.env.PUBLIC_URL}/asset/img/결제내역&결제 창/Placeholder image.png`} alt={"photo"} />
                    <div className={styles.productDiv}>
                        <p className={styles.productTitle}>{data.name}</p>
                        <p className={styles.productPay}>결제 금액 : {data.pay} 원</p>
                        <div className={styles.productNumDiv}>
                            <input type={"number"} className={styles.productNum} placeholder={"0"} />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                </div>
                <form action="#" className={styles.form}>
                    <div className={styles.formPay}>
                        <input type={"radio"} value={"toss"}/><label>toss</label>
                        <input type={"radio"} value={"naver"}/><label>naver</label>
                        <input type={"radio"} value={"kakao"}/><label>kakao</label>
                    </div>
                    <p className={styles.payText}>상품 금액 <span>{data.pay}</span></p>
                    <p className={styles.payText}>쿠폰 할인 <span>{data.coupon ? data.coupon : 0}</span></p>
                    <p className={styles.totalPayText}>총 결제 금액 <span>{data.pay - data.coupon ? data.pay - data.coupon : 0}</span></p>
                    <BtnTag type={"longBtn"} mode={"payBtn"} event={() => alert("API 구현중임")} />
                </form>
            </div>
            <FooterContent />
        </div>
    )
}