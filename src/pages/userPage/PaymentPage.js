import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import { product } from "../../apis/product";
import { userData } from "../../apis/userData";

import { BtnTag } from "../../component/BtnTag";
import { TitleTag } from "../../component/TitleTag";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSectionIdReturn } from "../../store/userLogin";
import styles from "./PaymentPage.module.css";

export const PaymentPage = () => {
    const [ data, setData ] = useState();
    const [ selectedValue, setSelectedValue ] = useState("");
    const { productName, amount } = useParams();
    const sectionId = useSelector(state => state.userLogin.sectionID);

    // useEffect(() => {
    //     product("productInfo", productId)
    //         .then(res => {
    //             setData(res);
    //         })
    // }, [productId]);

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery); document.head.appendChild(iamport);

        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);

    const handleRadioChange = ({ target }) => {
        setSelectedValue(target.value);
    };


    const productPayment = (e) => {
        e.preventDefault();

        const { IMP } = window;
        IMP.init('imp28240265');

        const datas = {
            pg: selectedValue,
            pay_method: "card",
            merchant_uid : `mid_${new Date().getTime()}`,
            name: productName,
            amount: amount,
            buyer_id: sectionId,
            buyer_tel : "010-0000-0000",
        };
        IMP.request_pay(datas, callback);
    }

    const callback = (res) => {
        const { success, error_msg } = res;

        if(success) {
            alert("결제 성공");
        } else {
            alert(`결제 실패 : ${error_msg}`);
        }
    }

    return (
        <div>
            <HeaderNav headerMode={false} />
            <div className={styles.contentDiv}>
                <TitleTag mode={"PayTitle"} />
                <div className={styles.payContent}>
                    <img src={`${process.env.PUBLIC_URL}/asset/img/결제내역&결제 창/Placeholder image.png`} alt={"photo"} />
                    <div className={styles.productDiv}>
                        <p className={styles.productTitle}>{productName}</p>
                        <p className={styles.productPay}>결제 금액 : {amount} 원</p>
                        <div className={styles.productNumDiv}>
                            <input type={"number"} className={styles.productNum} value={amount} />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                </div>
                <form onSubmit={productPayment} className={styles.form}>
                    <div className={styles.formPay}>
                        <div className={styles.formPay}>
                            <input type="radio" value="tosspay" checked={selectedValue === "tosspay"} onChange={handleRadioChange} />
                            <label>toss</label>
                            <input type="radio" value="naverpay" checked={selectedValue === "naverpay"} onChange={handleRadioChange} />
                            <label>naver</label>
                            <input type="radio" value="kakaopay" checked={selectedValue === "kakaopay"} onChange={handleRadioChange} />
                            <label>kakao</label>
                        </div>
                    </div>
                    <p className={styles.payText}>상품 금액 <span>{amount}</span></p>
                    <p className={styles.totalPayText}>총 결제 금액 <span>{amount}</span></p>
                    <BtnTag type={"longBtn"} mode={"payBtn"} />
                </form>
            </div>
            <FooterContent />
        </div>
    )
}