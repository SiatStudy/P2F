import { useState } from "react";
import { useParams } from 'react-router-dom';

import { PaginationContent } from "../../component/Pagenation";
import { SearchTarget } from "./SearchTarget";

import styles from "./SearchContent.module.css"

export const SearchContent = () => {
    const { searchData } = useParams();
    const [ searchDataState, setSearchDataState ] = useState(searchData === "default" ? "" : searchData);

    const SearchFunc = ({ target }) => {
        setSearchDataState(target.value);
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
