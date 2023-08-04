import {BtnTag} from "./BtnTag";
import styles from "./InputTag.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

export const InputTag = ({ mode, setValue, validate, check, checkType, disabled, event }) => {
    const [ showPassword, setShowPassword ] = useState(false);

    const inputObj = {
        "name" : {
            style : styles.inputTag,
            text : "닉네임 : ",
            type : "text",
            placeholder : "닉네임을 입력하세요.",
            errorText : "닉네임의 조건에 맞지 않습니다.",
            func : data => {
                setValue(data);
            }
        },
        "email" : {
            style : styles.inputTag,
            text : "이메일 : ",
            type : "email",
            placeholder : "이메일을 입력하세요.",
            errorText : "이메일 형식이 맞지 않습니다.",
            func : data => {
                setValue(data);
            }
        },
        "code" : {
            style : styles.inputTag,
            text : "인증번호 : ",
            type : "number",
            placeholder : "인증번호를 입력하세요.",
            func : data => {
                setValue(data);
            }
        },
        "id" : {
            style : styles.inputTag,
            text : "아이디 : ",
            type : "text",
            placeholder : "아이디를 입력하세요.",
            errorText : "아이디 형식이 맞지 않습니다.",
            func : data => {
                setValue(data);
            }
        },
        "pw" : {
            style : styles.inputTag,
            text : "비밀번호 : ",
            type : "text",
            placeholder : "비밀번호를 입력하세요.",
            errorText : "비밀번호 형식이 맞지 않습니다.",
            func : data => {
                setValue(data);
            }
        },
        "pwCorrect" : {
            style : styles.inputTag,
            text : "비밀번호 확인 : ",
            placeholder : "비밀번호를 다시 입력하세요.",
            type : "text",
            errorText : "비밀번호가 일치하지 않습니다.",
            func : data => {
                setValue(data);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <label className={styles.inputTitle}><span className={styles.Title}>{inputObj[mode].text}</span>
            <div className={`${check ? styles.inputBtnContainer : styles.inputContainer}`}>
                <input
                    className={inputObj[mode].style}
                    type={mode === "pw" || mode === "pwCorrect" ? (
                        showPassword ? "password" : "text"
                    ) : (
                        inputObj[mode].type
                    )}
                    placeholder={inputObj[mode].placeholder}
                    onChange={({ target }) => { inputObj[mode].func(target.value)} }
                />

                {mode === "pw" || mode === "pwCorrect" ? (
                    showPassword ? (
                        <FontAwesomeIcon icon={faEyeSlash} className={check ? styles.eyeIconBtn : styles.eyeIcon} onClick={togglePasswordVisibility}/>
                    ) : (
                        <FontAwesomeIcon icon={faEye} className={check ? styles.eyeIconBtn : styles.eyeIcon} onClick={togglePasswordVisibility}/>
                    )
                ) : null }

                {check ? (
                    <BtnTag type={"shortBtn"} mode={checkType} isdisabled={disabled} event={event} />
                ) : null }
            </div>

            {mode !== "code" && mode !== "pwCorrect" ? (
                validate ? null : (
                    <p className={styles.failP}>{inputObj[mode].errorText}</p>
                )
            ) : null }

            {mode === "pwCorrect" ? (
                validate ? null : (
                    <p className={styles.failP}>비밀번호가 일치하지 않습니다.</p>
                )
            ) : null }
        </label>
    )
}