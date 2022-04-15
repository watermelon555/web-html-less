import React, { CSSProperties, ReactElement } from "react"
import styles from "./index.module.scss"

interface NamedtProps {
    children?: ReactElement
    className?: string
    style?: CSSProperties
}

export const RenderDescComponent = (props: NamedtProps) => {
    const { children = null, className = "", style = {} } = props
    return (
        <div className={`${styles.projectDesc} ${styles[className || ""]}`} style={{ ...style }}>
            {children}
        </div>
    )
}
