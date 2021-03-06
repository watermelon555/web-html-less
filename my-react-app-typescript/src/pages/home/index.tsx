import React from "react"
import styles from "./index.less"
import { Article } from "../../components/Article"
const Home = (): React.ReactElement => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.commended}>
                    <div className={styles.commendedArticle}>
                        <Article />
                    </div>

                    <div className={styles.avatar}>
                        <div className={styles.bg} />
                        <div className={styles.name}>ăȘăă§ă</div>
                    </div>
                </div>
            </section>

            <article>
                <div className={styles.article}>
                    <Article />
                </div>
            </article>
        </div>
    )
}

export default Home
