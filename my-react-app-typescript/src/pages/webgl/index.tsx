import React, { useEffect, useState } from "react"
import Img from "../../assets/image/bg.jpg"
import styles from "./index.less"
export const WebGl = () => {
    const [context, setContext] = useState<any>(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const canvas: any = document.getElementById("canvas")
        const gl = canvas.getContext("2d")
        if (!gl) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.")
            return
        }
        setContext(gl)
    }, [])
    useEffect(() => {
        if (context !== null) {
            const img = new Image()
            img.src = Img
            img.onload = () => {
                context.drawImage(img, 0, 0)
                setLoaded(true)
            }
        }
    }, [context])
    useEffect(() => {
        if (loaded) {
            // ddf
        }
    }, [loaded])
    return (
        <canvas
            id={"canvas"}
            width={"400"}
            height={"400"}
            style={{ border: "1px solid black" }}
            className={styles.canvas}
        />
    )
}
