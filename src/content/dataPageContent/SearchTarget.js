import { TitleTag } from "../../component/TitleTag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchTarget.module.css";

export const SearchTarget = ({ setSearchData, event }) => {

    return (
        <div className={styles.searchInputDiv}>
            <TitleTag mode={"SearchTitle"} />
            <div className={styles.searchDiv}>
                <input type={"text"} className={styles.searchInput} placeholder={"검색어를 입력해주세요."} onChange={({ target }) => setSearchData(target.value)} />
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onClick={event}/>
            </div>
        </div>
    )
}