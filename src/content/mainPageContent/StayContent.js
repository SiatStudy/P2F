import React, { useEffect, useState } from "react";

import { product } from "../../apis/product";
import { stayTypeKey } from "../../json/stayTypeKey";

import { CardOfProduct } from "../../component/CardOfProduct";
import { Label2Tag } from "../../component/Label2Tag";
import { TitleTag } from "../../component/TitleTag";

import styles from "./StayContent.module.css";

export const StayContent = () => {
    const [ selectData, setSelectData ] = useState("모텔");
    const [ productData, setProductData ] = useState([]);

    const stay = ["모텔", "호텔", "게스트 하우스", "펜션"];

    useEffect(() => {
        product("location", stayTypeKey[selectData])
            .then(res => {
                const displayedStayJson = res.slice(0, 3);
                setProductData(displayedStayJson);
            })
    }, [selectData]);

    return (
        <section className={styles.mainProductSection}>
            <TitleTag mode={"stay"} />
            <div className={styles.contentDiv}>
                <Label2Tag data={stay} selectData={selectData} setSelectData={setSelectData} />
                <div className={styles.productList}>
                    {productData.map((data, index) => (
                        <CardOfProduct key={index} src={`${process.env.PUBLIC_URL}/asset/img/main/MainPage_추천_img.jpg`} data={data}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

