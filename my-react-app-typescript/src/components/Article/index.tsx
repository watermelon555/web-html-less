import React from "react"
import styles from "./index.module.scss"
// import article from './../../assets/image/bg.jpg'
import { Avatar } from "./../Avatar"
export const Article = () => {
    return (
        <div className={styles.articleWrap}>
            <div className={styles.articleBg}>
                <div className={styles.fuzzy}>
                    <div className={styles.title}>Hello World</div>
                    <div className={styles.date}>2021/1/14</div>
                </div>
            </div>
            <div className={styles.author}>
                <Avatar />
                <div className={styles.name}>なんでも</div>
            </div>
        </div>
    )
}
