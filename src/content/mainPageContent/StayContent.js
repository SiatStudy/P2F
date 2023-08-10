import axios from "axios";
import React, { useEffect, useState } from "react";

import { product } from "../../apis/product";
import { stayTypeKey } from "../../json/stayTypeKey";

import { CardOfProduct } from "../../component/CardOfProduct";
import { Label2Tag } from "../../component/Label2Tag";
import { TitleTag } from "../../component/TitleTag";

import styles from "./StayContent.module.css";

export const StayContent = () => {
    const [selectData, setSelectData] = useState("모텔");
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    const stay = ["모텔", "호텔", "게스트 하우스", "펜션"];

    useEffect(() => {
        setLoading(true);
        axios.get(`/main/category?category=${stayTypeKey[selectData]}`)
            .then(res => {
                const displayItem = res.data.slice(0, 3);
                setProductData(displayItem);
                setLoading(false);
            })
            .catch(err => alert("[ERROR] categories API error"));
    },[])

    useEffect(() => {
        setLoading(true); // 데이터 로딩 시작
        axios.get(`/main/category?category=${stayTypeKey[selectData]}`)
            .then(res => {
                const displayItem = res.data.slice(0, 3);
                setProductData(displayItem);
            })
            .catch(err => alert("[ERROR] categories API error"));
    }, [selectData]);

    return (
        <section className={styles.mainProductSection}>
            <TitleTag mode={"stay"} />
            <div className={styles.contentDiv}>
                <Label2Tag data={stay} selectData={selectData} setSelectData={setSelectData} />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={styles.productList}>
                        {productData.map(data => (
                            <CardOfProduct
                                src={`${process.env.PUBLIC_URL}/asset/img/main/MainPage_추천_img.jpg`}
                                data={data}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};