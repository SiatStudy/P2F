import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { userData } from "../../apis/userData";

import { TitleTag } from "../../component/TitleTag";
import {FooterContent} from "../../content/utilContent/FooterContent";
import { HeaderNav } from "../../content/utilContent/HeaderNav";

import styles from "./UserInfoPage.module.css"

export const UserInfoPage = () => {
    const userId = useSelector(state => state.userLogin);
    const [ data, setData ] = useState();

    useEffect(() => {
        userData("userinfo", userId)
            .then(res => {
                setData(res);
            });
    }, [userId])

    return (
        <>
            <HeaderNav headerMode={false} />
            <div className={styles.userInfoDiv}>
                <TitleTag mode={"UserTitle"} />
                <div className={styles.userInfoList}>
                    <div className={styles.userInfo}>
                        <p>이름</p>
                        <p>닉네임</p>
                        <p>Email</p>
                        <p>휴대폰 번호</p>
                        <p>생년 월일</p>
                        <p>주소</p>
                    </div>
                    <div className={styles.userData}>
                        <p>{data.username}</p>
                        <p>{data.usernickname}</p>
                        <p>{data.useremail}</p>
                        <p>{data.phone ? data.phone : `입력하지 않음.`}</p>
                        <p>{data.birthday ? data.phone : `입력하지 않음.`}</p>
                        <p>{data.location ? data.phone : `입력하지 않음.`}</p>
                    </div>
                </div>
            </div>
            <div className={styles.userInfoDiv}>
                <TitleTag mode={"VersionTitle"} />
                <div className={styles.userInfoList}>
                    <div className={styles.userInfo}>
                        <p>언어</p>
                        <p>업데이트</p>
                        <p>버전</p>
                    </div>
                    <div className={styles.userData}>
                        <p>한국어</p>
                        <p>2023.08.08</p>
                        <p>V 1.0.1</p>
                    </div>
                </div>
            </div>
            <FooterContent />
        </>
    );
}