import { useEffect, useState } from "react";

import { LocationContent } from "../../content/mainPageContent/LocationContent";
import { RecommendContent } from "../../content/mainPageContent/RecommendContent";
import { StayContent } from "../../content/mainPageContent/StayContent";
import { SwiperContent } from "../../content/mainPageContent/SwiperContent";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const MainPage = () => {
    const [ scrollMode, setScrollMode ] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll );
        }
    }, []);

    const handleScroll = () => {
        if(window.scrollY > 799) {
            setScrollMode(false);
        } else {
            setScrollMode(true);
        }
    }

    return (
        <>
            <HeaderNav headerMode={scrollMode} />
            <SwiperContent />
            <LocationContent />
            <StayContent />
            <RecommendContent />
            <FooterContent />
        </>
    )
}