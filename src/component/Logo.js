import styles from "./Logo.module.css";
export const Logo = ({ whiteMode, sizeMode }) => {

    return (
        <>
            {typeof sizeMode === "undefined" ? (whiteMode ? (
                <img src={`${process.env.PUBLIC_URL}/asset/icon/whiteLogo.svg`} className={styles.logo} alt={"white Main Logo"} />
            ) : (
                <img src={`${process.env.PUBLIC_URL}/asset/icon/Logo.svg`} className={styles.logo} alt={"Main Logo"} />
            )) : (
                <img src={`${process.env.PUBLIC_URL}/asset/icon/whiteLogo.svg`} className={styles.bigLogo} alt={"white Main Logo"} />
            )}
        </>
    )
}