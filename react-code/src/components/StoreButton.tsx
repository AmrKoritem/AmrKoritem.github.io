import React from "react"
import ios from "../assets/image/ios.png"
import android from "../assets/image/android.png"

const StoreButton: React.FC<{link: string, isAppStore: boolean}> = (props) => {
    return (
        <a
        href={props.link}
        style={{display: "inlineBlock", overflow: "hidden"}}>
            <img
            src={props.isAppStore ? ios : android}
            alt={`Download from ${props.isAppStore ? "App" : "Play"} Store`}
            style={{width: 40, height: 40}} />
        </a>
    )
}

export default StoreButton