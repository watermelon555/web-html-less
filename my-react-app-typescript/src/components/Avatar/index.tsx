import React from "react"
import styles from "./index.module.scss"
import article from "../../assets/image/bg.jpg"
export const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={article} alt="" />
        </div>
    )
}
