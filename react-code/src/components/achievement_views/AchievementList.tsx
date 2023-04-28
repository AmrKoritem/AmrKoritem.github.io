import React from "react"
import { Achievement } from "../models/Achievement"
import AchievementCell from "./AchievementCell"

const AchievementList: React.FC<{achievements: Achievement[]}> = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
            {props.achievements.map(achievement => {
                let link: string = "link" in achievement ? (achievement.link as string) : ""
                return <AchievementCell key={achievement.name} achievement={achievement} link={link} />
            })}
        </div>
    )
}

export default AchievementList