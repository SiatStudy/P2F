import styles from "./Label2Tag.module.css"

 export const Label2Tag = ({ data, selectData, setSelectData }) => {
    return (
        <div className={styles.labelDiv}>
            {data.map((text, index) => {
                if(text === selectData) {
                    return <div className={`${styles.label} ${styles.selected}`} key={index+1} data-value={text} onClick={({ target }) =>
                        selectData !== target.dataset["value"] ? setSelectData(target.dataset["value"]) : null
                    }>{text}</div>
                } else {
                    return <div className={styles.label} data-value={text} key={index+1} onClick={({ target }) =>
                        selectData !== target.dataset["value"] ? setSelectData(target.dataset["value"]) : null
                    }>{text}</div>
                }
            })}
        </div>
    )
}