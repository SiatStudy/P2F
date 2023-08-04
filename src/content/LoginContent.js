import {useEffect, useState} from "react";

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

        const bool = document.cookie.split("=")[1];
        if(!(typeof bool === "undefined")) {
            setValidate(bool === "true");
        }
        document.cookie = "validate" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }, [id, pw]);

    const loginFunc = () => {
        isIDPattern(id) && isPWPattern(pw) ? (
            alert("APIS 구현중입니다.")
        ) : (
            document.cookie = "validate=false"
        );
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