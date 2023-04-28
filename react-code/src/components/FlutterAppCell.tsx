import React from "react"
import { FlutterApp } from "../models/FlutterApp"
import AchievementCell from "./achievement_views/AchievementCell"
import StoreButton from "./StoreButton"

const FlutterAppCell: React.FC<{app: FlutterApp}> = (props) => {
    const cellStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px"
    }
    return (
        <div style={cellStyle}>
            <AchievementCell key={props.app.name} achievement={props.app} />
            <StoreButton link={props.app.links.app_store} isAppStore={true} />
            <StoreButton link={props.app.links.play_store} isAppStore={false} />
        </div>
    )
}

export default FlutterAppCell