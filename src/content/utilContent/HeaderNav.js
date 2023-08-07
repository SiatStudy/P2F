import { useState } from "react";

import { Navigator } from "../../component/Navigator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./HeaderNav.module.css"

export const HeaderNav = ({ headerMode }) => {
    const [ searchMode, setSearchMode ] = useState(false);

    const searchFunc = () => {
        alert("검색어 구현중");
    }

    return (
        <>
            {searchMode ? (
                <nav>
                    <Navigator mode={false} searchMode={searchMode} setSearchMode={setSearchMode} />
                    <div className={styles.searchContent}>
                        <input type={"text"} className={styles.searchInput} placeholder={"검색어를 입력해주세요."} />
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={searchFunc}/>
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