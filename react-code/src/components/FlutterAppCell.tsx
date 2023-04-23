import React from "react"
import playStoreBadge from "../assets/image/google-play-badge.png"
import { FlutterApp } from "../models/FlutterApp"
import AppImage from "./AppImage"

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
            <a
            href={props.app.links.app_store}
            style={{display: "inlineBlock", overflow: "hidden"}}>
                <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1625097600"
                alt="Download on the App Store"
                style={{borderRadius: "6px", width: "125px", height: "41px"}} />
            </a>
            <a
            href={props.app.links.play_store}
            style={{display: "inlineBlock", overflow: "hidden"}}>
                <img
                src={playStoreBadge}
                alt="Download on the Play Store"
                style={{borderRadius: "6px", width: "125px", height: "41px"}} />
            </a>
        </div>
    )
}

export default FlutterAppCell