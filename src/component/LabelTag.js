import styles from "./LabelTag.module.css";

export const LabelTag = ({ mode, setMode }) => {
    return (
        <div className={styles.LabelContainer}>
            <div className={`${mode === "id" ? styles.onLabel : styles.offLabel}`} onClick={() => setMode("id")}>ID 찾기</div>
            <div className={`${mode === "pw" ? styles.onLabel : styles.offLabel}`} onClick={() => setMode("pw")}>비밀번호 찾기</div>
        </div>
    )
}