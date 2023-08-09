import { useState } from "react";
import {useParams} from "react-router-dom";

import { BtnTag } from "../../component/BtnTag";
import { InputTag } from "../../component/InputTag";
import { LabelTag } from "../../component/LabelTag";

import { isEmailPattern } from "../../util/validation/isEmailPattern";
import { isIDPattern } from "../../util/validation/isIDPattern";

import styles from "./FindDataContent.module.css"

export const FindDataContent = () => {
    const { userData } = useParams();
    const [ mode, setMode ] = useState(userData);
    const [ email, setEmail ] = useState("");
    const [ id, setId ] = useState("");
    const [ sendData, setSendData ] = useState(null);

    const findIdFunc = () => {
        alert("API 구현중입니다.");
    }

    const findPwFunc = () => {
        alert("API 구현중입니다.");
    }

    return (
        <div className={styles.findContainer}>
            <LabelTag mode={mode} setMode={setMode} />
            {mode === "id" ? (
                sendData === null || sendData === "" ? (
                    <div className={styles.idFindContainer}>
                        <InputTag mode={"email"} setValue={setEmail} validate={email !== "" ? isEmailPattern(email) : true} />
                        <BtnTag type={"longBtn"} mode={"idFind"} event={findIdFunc} isdisabled={email !== ""} />
                    </div>
                ) : (
                    <div className={styles.idFindContainer}>
                        <p className={styles.text}>회원님의 아이디는 <span className={styles.textId}>{sendData}</span>입니다.</p>
                        <BtnTag type={"longBtn"} mode={"toLogin"} event={() => alert("라우터 구현중")} isdisabled={email !== ""} />
                    </div>
                )
            ) : (
                sendData === null || sendData === "" ? (
                    <div className={styles.pwFindContainer}>
                        <InputTag mode={"id"} setValue={setId} validate={id !== "" ? isIDPattern(id) : true} />
                        <InputTag mode={"email"} setValue={setEmail} validate={email !== "" ? isEmailPattern(email) : true} />
                        <BtnTag type={"longBtn"} mode={"pwFind"} event={findPwFunc} isdisabled={(id !== "" && email !== "")} />
                    </div>
                ) : (
                    <div className={styles.idFindContainer}>
                        <p className={styles.text}> 이메일로 전송완료 했습니다.</p>
                        <BtnTag type={"longBtn"} mode={"toLogin"} event={() => alert("라우터 구현중")} isdisabled={email !== ""} />
                    </div>
                )
            )}
        </div>
    )
}