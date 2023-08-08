import { useState } from "react";

import { PaginationContent } from "../../component/Pagenation";
import { StayTarget } from "../../content/dataPageContent/StayTarget";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const StayPage = () => {
    const [ categories, setCategories ] = useState("서울");

    return (
        <>
            <HeaderNav headerMode={false} />
            <StayTarget selected={categories} setEvent={setCategories} />
            <PaginationContent mode={"stay"} selected={categories} />
        </>
    )
}