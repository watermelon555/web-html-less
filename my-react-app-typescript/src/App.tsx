import React, { useState } from "react"
import styles from "./App.module.scss"
// import { BrowserRouter } from 'react-router-dom'
// import { Navbar } from './components/Navbar'
import { Router } from "./routers"
import { Avatar } from "./components/Avatar"
import { Menu } from "./components/Menu"
import { BrowserRouter } from "react-router-dom"
import MenuProps from "./types"

const App = () => {
    const [isShowAside, setIsShowAside] = useState<boolean>(false)
    const menuItem: MenuProps[] = [
        {
            name: "首页",
            active: false,
            icon: "home",
            child: [],
            href: "/",
            id: 1
        }
    ]

    const handleAside = (e: any) => {
        console.log(e, "=======")
        setIsShowAside(!isShowAside)
    }

    return (
        <div className={styles.App}>
            <BrowserRouter>
                {isShowAside && (
                    <aside>
                        <div className={styles.asideHeader}>
                            <Avatar />
                            <div>
                                <div className={styles.asideName}>なんでも</div>
                                <div className={styles.asideDesc}>なんでも</div>
                            </div>
                        </div>
                        <Menu menuItem={menuItem} />
                    </aside>
                )}
                <div className={styles.content} onClick={handleAside}>
                    {isShowAside && <div className={styles.mask} />}
                    <header>
                        <div className={styles.headerBg}>
                            <div className={styles.headerMenu}>
                                <div className={"menu"} onClick={handleAside}>
                                    <i className="fa fa-bars" aria-hidden="true" />
                                </div>
                                <div>
                                    <i className="fa fa-search" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <Router />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
