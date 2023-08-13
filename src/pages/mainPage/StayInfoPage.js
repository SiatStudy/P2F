import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";

import { stayInfo } from "../../json/stayInfo";

import MapComponent from "../../component/MapComponent";
import { BtnTag } from "../../component/BtnTag";
import { Label2Tag } from "../../component/Label2Tag";
import { TitleTag } from "../../component/TitleTag";

import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './SwiperContent.css';
import styles from "./StayInfoPage.module.css";

export const StayInfoPage = () => {
    const data = useSelector(state => state.selectedProduct.data);
    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();
    const [ mode, setMode ] = useState("상세 정보");
    const [ duration, setDuration ] = useState();

    const history = useNavigate();

    const settings = {
        className : "slider-items",
        dots: false,
        arrows: false,
        infinite : true,
        speed : 500,
        autoplay: true,
        autoplaySpeed : 2500
    };

    const swiperPhoto = ["img_1", "img_2", "img_3"];

    useEffect(() => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const timeDiff = end - start;
        setDuration(timeDiff / 86400000);
    }, [startDate, endDate])

    return (
        <>
            <HeaderNav headerMode={false} />
            <Slider { ...settings }>
                {swiperPhoto.map((item, index) => {
                    return <img key={index + 1}  src={`${process.env.PUBLIC_URL}/asset/img/상세페이지/content_${item}.png`} alt={"photo"}/>
                })}
            </Slider>
            <div className={styles.contentDiv}>
                <div>
                    <p className={styles.star}>
                        <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                        {data.pdpoint}
                    </p>
                    <p className={styles.textTitle}>
                        [{data.pdaddr.split(" ")[0]} / {data.pdaddr.split(" ")[1]}] {data.pdname}
                    </p>
                </div>
                <div className={styles.dateContent}>
                    <input type={"date"} className={styles.dateInput} onChange={({ target }) => setStartDate(target.value)} />
                    <input type={"date"} className={styles.dateInput} onChange={({ target }) => setEndDate(target.value)}/>
                </div>
                <div className={styles.dateAPay}>
                    <div>
                        {startDate || endDate ? (<p>{startDate} ~ {endDate}</p>) : (<p>기간을 설정하지 않았습니다.</p>)}
                    </div>
                    <p>금액: <span>{data.pdprice ? data.pdprice : 0}</span></p>
                </div>
                <div className={styles.totalDiv}>
                    <p>총 합계 : <span>{isNaN(data.pdprice * duration) ? <span>0</span> : <span>{data.pdprice * duration}</span>}</span></p>
                    <BtnTag type={"shortBtn"} mode={"bookBtn"} isdisabled={!(startDate && endDate)} event={() => history(`/payment/${data.pdname}/${data.pdprice * duration}`)} />
                </div>
                <Label2Tag data={["상세 정보","이용 안내"]} selectData={mode} setSelectData={setMode} />
                { mode === "상세 정보" ? (
                    <div className={styles.contentDiv}>
                        <p className={styles.mainTitle}>#도심 속 낭만적인 휴식</p>
                        <img src={`${process.env.PUBLIC_URL}/asset/img/상세페이지/top_main_img.png`} alt={"photo"} />
                        <div className={styles.text1}>
                            <ul className={styles.stayText}>
                                <li className={styles.title}>도심 속 자리 잡은 호텔에서 여유로운 휴식</li>
                                <li className={styles.text}>서울의 한 가운데에 자리 잡은 곳에 도시의 이 경험을 경험해보세요.</li>
                            </ul>
                            <img src={`${process.env.PUBLIC_URL}/asset/img/상세페이지/content_img_2.png`} alt={"photo"} />
                        </div>
                        <div className={styles.text1}>
                            <img src={`${process.env.PUBLIC_URL}/asset/img/상세페이지/content_img_3.png`} alt={"photo"} />
                            <ul className={styles.stayText}>
                                <li className={styles.title}>일상에서 느껴보지 못한 럭셔리함</li>
                                <li className={styles.text}>감각적이고 세련된 인테리어에서 우아한 휴식을 선물합니다.</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className={styles.contentUseDiv}>
                        <div className={styles.stayInfoFac}>
                            <TitleTag mode={"stayUse"} />
                            <div className={styles.stayInfoFacG}>
                                {stayInfo.facilities.map(item => (
                                    <p className={styles.textFac}>{item}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles.stayInfoFac}>
                            <TitleTag mode={"stayProduct"} />
                            <ul className={styles.itemList}>
                                {stayInfo.info.map(item => (
                                    <li className={styles.items}>{item}</li>
                                ))}
                                {stayInfo.sp.map(item => (
                                    <li className={styles.sp}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.MapDiv}>
                            <TitleTag mode={"stayLocation"} />
                            <MapComponent address={data.pdaddr} api={"AIzaSyAljTnFeC3gPK9v_OvHtBUESbTTVGoXiAc"} />
                        </div>
                    </div>
                )}
            </div>
            <FooterContent />
        </>
    )
}