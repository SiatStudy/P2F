import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Logo } from "./Logo";

import { faSearch, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navigator.module.css";

export const Navigator = ({ mode, searchMode, setSearchMode }) => {
    const userLogin = useSelector(state => state.userLogin);
    const history = useNavigate();

    const styleMode = {
        true : {
            background : styles.noneNav,
            text : styles.whiteText,
            icon : styles.whiteIcon
        },
        false : {
            background : styles.whiteNav,
            text : styles.colorText,
            icon : styles.colorIcon
        }
    }

    return (
        <div className={styleMode[mode].background}>
            <div className={styles.navDiv}>
                <Logo whiteMode={mode} sizeMode={undefined} event={() => history("/")}  />
                <ul className={styles.menuList}>
                    <li className={styleMode[mode].text} onClick={() => history(`/location/default`)} >지역별 검색</li>
                    <li className={styleMode[mode].text} onClick={() => history(`/stay/default`)} >종류별 검색</li>
                </ul>
            </div>
            {searchMode ? (
                <FontAwesomeIcon icon={faTimes} className={styles.timeIcon} onClick={() => setSearchMode(false)} />
            ) : (
               <div className={styles.quickDiv}>
                   <ul className={styles.quickList}>
                       <li className={styleMode[mode].icon}>
                           <FontAwesomeIcon icon={faSearch} onClick={() => setSearchMode(true)} />
                       </li>
                       <li className={styleMode[mode].icon}>
                           <FontAwesomeIcon icon={faUser} onClick={() => userLogin.useLogin ? history("/mypage") : history("/login")} />
                       </li>
                   </ul>
               </div>
            )}
        </div>
    )
}