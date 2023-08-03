import {useEffect, useRef, useState} from "react";

import { isIDPattern } from "../util/validation/isIDPattern";
import { isPWPattern } from "../util/validation/isPWPattern";

import { BtnTag } from "../component/BtnTag";
import { LinkTag } from "../component/LinkTag";
import { InputTag } from "../component/InputTag";

import styles from "./LoginContent.module.css";

export const LoginContent = () => {
    const [ id, setId ] = useState("");
    const [ pw, setPw ] = useState("");
    const [ validate, setValidate ] = useState(true);
    const [ onBtn, setOnBtn ] = useState(true);

    useEffect(() => {
        if(id && pw) {
            setOnBtn(false);
        } else {
            setOnBtn(true);
        }

        if(document.cookie.split("=")[1]) {
            console.log(document.cookie.split("=")[1]);
            setValidate(false);
        }
    }, [id, pw]);

    const loginFunc = () => {
        alert("PW " + pw + isPWPattern(pw) + "ID " + id + isIDPattern(id));
        isIDPattern(id) && isPWPattern(pw) ?
            document.cookie = "validate=true" : document.cookie = "validate=false"
    }

    return (
        <form className={styles.formTag}>
            <div className={styles.loginInput}>
                <InputTag mode={"id"} setValue={setId} validate={validate}/>
                <InputTag mode={"pw"} setValue={setPw} validate={validate}/>
            </div>
            <span className={styles.LinkContainer}><LinkTag mode={"idFind"} /> / <LinkTag mode={"pwFind"} /></span>
            <BtnTag mode={"login"} type={"longBtn"} isdisabled={onBtn} event={loginFunc} />
        </form>
    )
}