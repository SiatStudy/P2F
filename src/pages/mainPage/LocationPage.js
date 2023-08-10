import { useState } from "react";
import { useParams } from "react-router-dom";

import { PaginationContent } from "../../component/Pagenation";
import { LocationTarget } from "../../content/dataPageContent/LocationTarget";
import { FooterContent } from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const LocationPage = () => {
    const { locationData } = useParams();
    const [ categories, setCategories ] = useState(locationData === "default" ? "서울" : locationData);

    return (
        <>
            <HeaderNav headerMode={false} />
            <LocationTarget selected={categories} setEvent={setCategories} />
            <PaginationContent mode={"location"} selected={categories} />
            <FooterContent />
        </>
    )
}