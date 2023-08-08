import { useState } from "react";
import { useLocation } from 'react-router-dom';

import { PaginationContent } from "../../component/Pagenation";
import { SearchTarget } from "./SearchTarget";

import styles from "./SearchContent.module.css"

export const SearchContent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchData = searchParams.get('searchData');

    const [searchDataState, setSearchDataState] = useState(searchData);

    const SearchFunc = () => {
        setSearchDataState("newSearchData");
    }

    return (
        <div className={styles.searchContent}>
            <SearchTarget setSearchData={setSearchDataState} event={SearchFunc} />
            {searchDataState && (
                <PaginationContent mode={"search"} selected={searchDataState} />
            )}
        </div>
    )
}
