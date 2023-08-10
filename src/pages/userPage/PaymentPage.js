import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { product } from "../../apis/product";
import { userData } from "../../apis/userData";

import { BtnTag } from "../../component/BtnTag";
import { TitleTag } from "../../component/TitleTag";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./PaymentPage.module.css";

export const PaymentPage = () => {
    const [ data, setData ] = useState([]);
    const { productId, amount } = useParams();

    useEffect(() => {
        product("productInfo", productId)
            .then(res => {
                setData(res);
            })
    }, [productId]);

    const productPayment = async () => {
        await userData("payment", { pdname : data.pdname, amount : amount})
            .then(res => {
                if(res) {
                    alert("결제 성공");
                } else {
                    alert("결제 실패");
                }
            })
    }

    return (
        <div>
            <HeaderNav headerMode={false} />
            <div className={styles.contentDiv}>
                <TitleTag mode={"PayTitle"} />
                <div className={styles.payContent}>
                    <img src={`${process.env.PUBLIC_URL}/asset/img/결제내역&결제 창/Placeholder image.png`} alt={"photo"} />
                    <div className={styles.productDiv}>
                        <p className={styles.productTitle}>{data.pdname}</p>
                        <p className={styles.productPay}>결제 금액 : {data.pdprice} 원</p>
                        <div className={styles.productNumDiv}>
                            <input type={"number"} className={styles.productNum} value={amount} />
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
                    <p className={styles.payText}>상품 금액 <span>{data.pdprice}</span></p>
                    <p className={styles.totalPayText}>총 결제 금액 <span>{data.pdprice * amount}</span></p>
                    <BtnTag type={"longBtn"} mode={"payBtn"} event={productPayment} />
                </form>
            </div>
            <FooterContent />
        </div>
    )
}