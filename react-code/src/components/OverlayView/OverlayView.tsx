import React, { ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./OverlayView.module.css"

const OverlayView: React.FC<{children: ReactNode, onCancelHandler: React.MouseEventHandler<HTMLDivElement>}> = (props) => {
    return (
        <>
            {createPortal(
                <div className={styles.overlayView}>
                    <div onClick={props.onCancelHandler} style={{display: "flex", height: "100vh", placeItems: "center", placeContent: "center"}}>
                        {props.children}
                    </div>
                </div>,
                document.getElementById("overlay-view-root") as HTMLElement
            )}
        </>
    )
}

export default OverlayView