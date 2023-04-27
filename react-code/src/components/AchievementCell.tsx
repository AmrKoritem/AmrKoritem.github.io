import React from "react"
import { Achievement } from "../models/Achievement"
import AppImage from "./AppImage"

const AchievementCell: React.FC<{achievement: Achievement, link?: string}> = (props) => {
    const cellStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: "180px",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px"
    }
    return (
        <div style={cellStyle}>
            <a href={props.link}>
                <AppImage link={props.achievement.image.link} alt={props.achievement.image.alt} />
            </a>
            <p style={{ textAlign: "center", marginTop: "0" }}>{props.achievement.name}</p>
        </div>
    )
}

export default AchievementCell