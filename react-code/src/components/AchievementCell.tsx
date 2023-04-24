import React from "react"
import { Achievement } from "../models/Achievement"
import AppImage from "./AppImage"

const AchievementCell: React.FC<{achievement: Achievement, link?: string}> = (props) => {
    let cellStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px"
    }
    return (
        <div style={cellStyle}>
            <a href={props.link}>
                <AppImage link={props.achievement.image.link} alt={props.achievement.image.alt} />
            </a>
            <p>{props.achievement.name}</p>
        </div>
    )
}

export default AchievementCell