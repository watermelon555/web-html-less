import React, { useState } from "react"
import styles from "./App.module.scss"
// import { BrowserRouter } from 'react-router-dom'
// import { Navbar } from './components/Navbar'
import { Router } from "./routers"
import { Avatar } from "./components/Avatar"
import { Menu } from "./components/Menu"
import { BrowserRouter } from "react-router-dom"
import MenuProps from "./types"
import { Footer } from "./components/Footer"

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
        },

        {
            name: "布局",
            active: true,
            icon: "file-text-o",
            child: [
                {
                    name: "flex",
                    active: false,
                    icon: "pagelines",
                    child: [],
                    href: "/flex",
                    id: 1
                },
                {
                    name: "float",
                    active: false,
                    icon: "pagelines",
                    child: [],
                    href: "/float",
                    id: 2
                },
                {
                    name: "grid",
                    active: false,
                    icon: "pagelines",
                    child: [],
                    href: "/grid",
                    id: 3
                }
            ],
            href: "",
            id: 2
        }
    ]

    const handleAside = () => {
        if (isShowAside) {
            setIsShowAside(!isShowAside)
        }
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
                                <div className={"menu"} onClick={() => setIsShowAside(true)}>
                                    <i className="fa fa-bars" aria-hidden="true" />
                                </div>
                                <div>
                                    <i className="fa fa-search" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className={styles.nav}>
                        <nav>
                            <Router />
                        </nav>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
