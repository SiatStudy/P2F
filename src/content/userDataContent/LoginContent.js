import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../apis/login";
import {userLogin} from "../../store/userLogin";

import { isIDPattern } from "../../util/validation/isIDPattern";
import { isPWPattern } from "../../util/validation/isPWPattern";

import { BtnTag } from "../../component/BtnTag";
import { LinkTag } from "../../component/LinkTag";
import { InputTag } from "../../component/InputTag";

import styles from "./LoginContent.module.css";

export const LoginContent = () => {
    const [ id, setId ] = useState("");
    const [ pw, setPw ] = useState("");
    const [ validate, setValidate ] = useState(true);
    const [ onBtn, setOnBtn ] = useState(true);

    const dispatch = useDispatch();

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

    const loginFunc = async (e) => {
        e.preventDefault();

        if(isIDPattern(id) && isPWPattern(pw)) {
            const req = await login("login", {id: id, password: pw});
            if (req) {
                dispatch(userLogin(req));
            }
        } else {
            document.cookie = "validate=false"
        }
    }

    return (
        <form onSubmit={loginFunc} className={styles.formTag}>
            <div className={styles.loginInput}>
                <InputTag mode={"id"} setValue={setId} validate={validate}/>
                <InputTag mode={"pw"} setValue={setPw} validate={validate}/>
            </div>
            <span className={styles.LinkContainer}><LinkTag mode={"idFind"} /> / <LinkTag mode={"pwFind"} /></span>
            <BtnTag mode={"login"} type={"longBtn"} isdisabled={onBtn} />
            <span>아직 회원이 아니십니까? <LinkTag mode={"signup"}  /></span>
        </form>
    )
}