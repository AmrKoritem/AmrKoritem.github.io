import React, { ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./OverlayView.module.css"

const OverlayView: React.FC<{children: ReactNode, onCancelHandler: React.MouseEventHandler<HTMLDivElement>}> = (props) => {
    return (
        <>
            {createPortal(
                <div className={styles.overlayBackground} onClick={props.onCancelHandler}></div>,
                document.getElementById("overlay-background-root") as HTMLElement
            )}
            {createPortal(
                <div className={styles.overlayView}>
                    {props.children}
                </div>,
                document.getElementById("overlay-view-root") as HTMLElement
            )}
        </>
    )
}

export default OverlayView