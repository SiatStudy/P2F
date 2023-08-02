import styles from "./InputTag.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";
import { isEmailPattern } from "../util/validation/isEmailPattern";
import { isIDPattern } from "../util/validation/isIDPattern";
import { isPWPattern } from "../util/validation/isPWPattern";

export const InputTag = ({ mode, setValue, validation }) => {
    const [ validate, setValidate ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);

    const inputObj = {
        "email" : {
            style : "emailInput",
            text : "이메일 : ",
            type : "email",
            placeholder : "이메일을 입력하세요.",
            func : data => {
                setValue(data);
                setValidate(isEmailPattern(data));
            }
        },
        "code" : {
            style : "codeInput",
            text : "인증번호 : ",
            type : "number",
            placeholder : "인증번호를 입력하세요.",
            func : data => {
                setValue(data);
            }
        },
        "id" : {
            style : "idInput",
            text : "아이디 : ",
            type : "text",
            placeholder : "아이디를 입력하세요.",
            func : data => {
                setValue(data);
                setValidate(isIDPattern(data));
            }
        },
        "pw" : {
            style : "pwInput",
            text : "비밀번호 : ",
            type : "text",
            placeholder : "비밀번호를 입력하세요.",
            func : data => {
                setValue(data);
                setValidate(isPWPattern(data));
            }
        },
        "pwCorrect" : {
            style : "pwCorrectInput",
            text : "비밀번호 확인 : ",
            type : "text",
            func : data => {
                setValue(data);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <>
            <p className={styles.inputTitle}>{inputObj[mode].text}</p>
            <div className={styles.inputContainer}>
                <input
                    className={styles.inputTag}
                    type={mode === "pw" || mode === "pwCorrect" ? (
                        showPassword ? "password" : "text"
                    ) : (
                        inputObj[mode].type
                    )}
                    placeholder={inputObj[mode].placeholder}
                    /*onChange={({ target }) => { inputObj[mode].func(target.value)} }*/
                />
                {mode === "pw" || mode === "pwCorrect" ? (
                    showPassword ? (
                        <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} onClick={togglePasswordVisibility}/>
                    ) : (
                        <FontAwesomeIcon icon={faEyeSlash} className={styles.eyeIcon} onClick={togglePasswordVisibility}/>
                    )
                ) : null }
            </div>
            {mode !== "code" && mode !== "pwCorrect" ? (
                validate ? (
                    <p className={"trueP"}>조건이 만족했습니다.</p>
                ) : (
                    <p className={"failP"}>조건이 틀렸습니다.</p>
                )
            ) : null }
            {mode === "pwCorrect" ? (
                !validation ? (
                    <p className={"failP"}>비밀번호가 일치하지 않습니다.</p>
                ) : null
            ) : null }
        </>
    )
}