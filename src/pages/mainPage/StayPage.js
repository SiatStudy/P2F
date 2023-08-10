import { useState } from "react";
import { useParams } from "react-router-dom";

import { PaginationContent } from "../../component/Pagenation";
import { StayTarget } from "../../content/dataPageContent/StayTarget";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const StayPage = () => {
    const { stayData } = useParams();
    const [ categories, setCategories ] = useState(stayData === "default" ? "모텔" : stayData);

    return (
        <>
            <HeaderNav headerMode={false} />
            <StayTarget selected={categories} setEvent={setCategories} />
            <PaginationContent mode={"stay"} selected={categories} />
            <FooterContent />
        </>
    )
}