import styles from "./index.module.scss"
import React from "react"
import { Link } from "react-router-dom"
import MenuProps from "../../types"

export const Menu = (props: any) => {
    const { menuItem } = props
    const renderMenu = (item: MenuProps, isChild: boolean) => {
        return (
            <div className={`${styles.menuWrap} ${isChild ? styles.menuItemChild : ""}`} key={item.id}>
                <div className={styles.menuItem}>
                    <div className={styles.menu}>
                        <Link to={item.href} className={styles.link}>
                            <i className={`${styles.icon} fa fa-${item.icon}`} />
                            <span className={styles.menuName}>{item.name}</span>
                        </Link>
                    </div>
                    {item.child.length > 0 && (
                        <i
                            className={`${styles.icon} fa fa-angle-${item.active ? "up" : "down"} ${styles.faAngleUp}`}
                        />
                    )}
                </div>
                {item.child && item.child.map((v: MenuProps) => renderMenu(v, true))}
            </div>
        )
    }
    return menuItem.map((v: MenuProps) => renderMenu(v, false))
}
