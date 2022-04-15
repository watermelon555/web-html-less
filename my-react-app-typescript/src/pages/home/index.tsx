import React from "react"
import styles from "./index.module.scss"
import { Article } from "../../components/Article"
export const Home = () => {
    return (
        <div>
            <div className={styles.nav}>
                <nav>
                    <section>
                        <div className={styles.commended}>
                            <div className={styles.commendedArticle}>
                                <Article />
                            </div>

                            <div className={styles.avatar}>
                                <div className={styles.bg} />
                                <div className={styles.name}>なんでも</div>
                            </div>
                        </div>
                    </section>

                    <article>
                        <div className={styles.article}>
                            <Article />
                        </div>
                    </article>
                </nav>
            </div>

            <footer>
                <div className={styles.footer}>
                    <div>なんでも!</div>
                    <div>なんでも!</div>
                    <div>なんでも!</div>
                </div>
            </footer>
        </div>
    )
}
