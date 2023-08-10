import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navigator } from "../../component/Navigator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./HeaderNav.module.css"

export const HeaderNav = ({ headerMode }) => {
    const [ searchMode, setSearchMode ] = useState(false);
    const [ searchData, setSearchData ] = useState("");
    const history = useNavigate();

    return (
        <>
            {searchMode ? (
                <nav>
                    <Navigator mode={false} searchMode={searchMode} setSearchMode={setSearchMode} />
                    <div className={styles.searchContent}>
                        <input type={"text"} className={styles.searchInput} placeholder={"검색어를 입력해주세요."} onChange={({ target }) => setSearchData(target.value)} />
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={() => history(`/search/${searchData}`)}/>
                    </div>
                </nav>
            ) : (
                <nav>
                    <Navigator mode={headerMode} setSearchMode={setSearchMode} />
                </nav>
            )}
        </>
    )
}