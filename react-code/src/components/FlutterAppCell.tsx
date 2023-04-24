import React from "react"
import playStoreBadge from "../assets/image/google-play-badge.png"
import { FlutterApp } from "../models/FlutterApp"
import AppImage from "./AppImage"
import StoreButton from "./StoreButton"

const FlutterAppCell: React.FC<{app: FlutterApp}> = (props) => {
    let cellStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px"
    }
    return (
        <div style={cellStyle}>
            <AppImage link={props.app.image.link} alt={props.app.image.alt} />
            <p>{props.app.name}</p>
            <StoreButton link={props.app.links.app_store} isAppStore={true} />
            <StoreButton link={props.app.links.play_store} isAppStore={false} />
        </div>
    )
}

export default FlutterAppCell