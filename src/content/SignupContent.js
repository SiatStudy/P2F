import { useEffect, useState } from "react";

import { BtnTag } from "../component/BtnTag";
import { InputTag } from "../component/InputTag";

import { isEmailPattern } from "../util/validation/isEmailPattern";
import { isIDPattern } from "../util/validation/isIDPattern";
import { isNickNamePattern } from "../util/validation/isNickNamePattern";
import { isPWPattern } from "../util/validation/isPWPattern";

import styles from "./SignupContent.module.css";

export const SignupContent = () => {
    const [ nickName, setNickName ] = useState("");
    const [ id, setId ] = useState("");
    const [ idValidate, setIdValidate ] = useState(true);
    const [ pw, setPw ] = useState("");
    const [ pwValidate, setPwValidate ] = useState(true);
    const [ pwSafe, setPwSafe ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ emailValidate, setEmailValidate ] = useState(true);
    const [ onBtn, setOnBtn ] = useState(true);

    useEffect(() => {
        if(!pwValidate && !idValidate && !emailValidate && isNickNamePattern(nickName)) {
            setOnBtn(false);
        } else {
            setOnBtn(true);
        }
    }, [idValidate, emailValidate, pwValidate, nickName]);

    useEffect(() => {
        if(isPWPattern(pw) && pw !== "") {
            setPwValidate(false);
        } else {
            setPwValidate(true);
        }
    }, [pw]);

    const IdDupleFunc = () => {
        if(isIDPattern(id)) {
            alert("API 구현중입니다.");
        } else {
            setIdValidate(false);
        }
    }

    const EmailDupleFunc = () => {
        if(isEmailPattern(email)) {
            alert("API 구현중입니다.");
        } else {
            setEmailValidate(false);
        }
    }

    const signUpFunc = () => {
        alert("API 구현중입니다.");
    }

    return (
        <>
            <form className={styles.formTag}>
                <InputTag mode={"id"} check={true} checkType={"dupleBtn"} setValue={setId} validate={idValidate} disabled={id === ""} event={IdDupleFunc} />
                <InputTag mode={"name"} setValue={setNickName} validate={nickName !== "" ? isNickNamePattern(nickName) : true} />
                <InputTag mode={"pw"} setValue={setPw} validate={pwValidate} />
                <InputTag mode={"pwCorrect"} check={true} checkType={"checkBtn"} setValue={setPwSafe} validate={pwSafe !== "" ? pw === pwSafe : true} disabled={(pwSafe === "" || pw === "")} />
                <InputTag mode={"email"} check={true} checkType={"reqBtn"} setValue={setEmail} validate={emailValidate} disabled={email === ""} event={EmailDupleFunc} />
                <BtnTag type={"longBtn"} mode={"signup"} event={signUpFunc} isdisabled={onBtn} />
            </form>
        </>
    )
}