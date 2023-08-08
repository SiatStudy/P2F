import { useState } from "react";

import { PaginationContent } from "../../component/Pagenation";
import { LocationTarget } from "../../content/dataPageContent/LocationTarget";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const LocationPage = () => {
    const [ categories, setCategories ] = useState("서울");


    return (
        <>
            <HeaderNav headerMode={false} />
            <LocationTarget selected={categories} setEvent={setCategories} />
            <PaginationContent mode={"location"} selected={categories} />
        </>
    )
}