import Slider from "react-slick";

import { swiperData } from "../../json/swiperData";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CardOfSwiper} from "../../component/CardOfSwiper";
import "./SwiperContent.css";

export const SwiperContent = () => {
    const settings = {
        className : "slider-items",
        dots: true,
        arrows: false,
        infinite : true,
        speed : 500,
        autoplay: true,
        autoplaySpeed : 2500
    };

    return (
        <section>
            <Slider { ...settings }>
                {swiperData.map(data => {
                    return <CardOfSwiper data={data} key={data.id} />
                })}
            </Slider>
        </section>
    )
}