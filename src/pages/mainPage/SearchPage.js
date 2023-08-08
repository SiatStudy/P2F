import { useState } from "react";

import { PaginationContent } from "../../component/Pagenation";
import {SearchContent} from "../../content/dataPageContent/SearchContent";
import { SearchTarget } from "../../content/dataPageContent/SearchTarget";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

export const SearchPage = () => {
    return (
        <>
            <HeaderNav headerMode={false} />
            <SearchContent />
        </>
    )
}