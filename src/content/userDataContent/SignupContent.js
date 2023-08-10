import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../../apis/login";

import { BtnTag } from "../../component/BtnTag";
import { InputTag } from "../../component/InputTag";

import { isEmailPattern } from "../../util/validation/isEmailPattern";
import { isIDPattern } from "../../util/validation/isIDPattern";
import { isNickNamePattern } from "../../util/validation/isNickNamePattern";
import { isPWPattern } from "../../util/validation/isPWPattern";

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
    const [ code, setCode ] = useState();
    const [ codeMode, setCodeMode ] = useState(false);
    const [ onBtn, setOnBtn ] = useState(true);

    const history = useNavigate();

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
            const req = login("duple", { id : id });
            if(req) {
                setIdValidate(true);
            } else {
                alert("중복되는 아이디가 존재합니다.")
                setIdValidate(false);
            }
        } else {
            setIdValidate(false);
        }
    }

    const EmailFunc = () => {
        if(isEmailPattern(email)) {
            const req = login("emailCode", { email : email });
            if(req) {
                setCodeMode(true);
            } else {
                setCodeMode(false);
            }
        } else {
            setEmailValidate(false);
        }
    }

    const CodeFunc = () => {
        const req = login("code", { code : code });
        if(code) {
            setEmailValidate(true);
        } else {
            alert("이메일 코드가 올바르지 않습니다.");
        }
    }

    const signUpFunc = () => {
        const req = login("signup", { id : id, email : email, password : pw, name : nickName });
        if(req) {
            alert("회원가입 완료")
            history("/login");
        } else {
            alert("회원가입 실패");
            history("/login");
        }
    }

    return (
        <>
            <form className={styles.formTag}>
                <InputTag mode={"id"} check={true} checkType={"dupleBtn"} setValue={setId} validate={idValidate} disabled={id === ""} event={IdDupleFunc} />
                <InputTag mode={"name"} setValue={setNickName} validate={nickName !== "" ? isNickNamePattern(nickName) : true} />
                <InputTag mode={"pw"} setValue={setPw} validate={pwValidate} />
                <InputTag mode={"pwCorrect"} setValue={setPwSafe} validate={pwSafe !== "" ? pw === pwSafe : true} disabled={(pwSafe === "" || pw === "")} />
                <InputTag mode={"email"} check={true} checkType={"reqBtn"} setValue={setEmail} validate={emailValidate} disabled={email === ""} event={EmailFunc} />
                {codeMode ? (
                    <InputTag mode={"code"} check={true} checkType={"reqBtn"} setValue={setCode} disabled={code === ""} event={CodeFunc} />
                ) : null }
                <BtnTag type={"longBtn"} mode={"signup"} event={signUpFunc} isdisabled={onBtn} />
            </form>
        </>
    )
}