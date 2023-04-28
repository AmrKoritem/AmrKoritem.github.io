import React from "react"
import styles from "./AchievementGrid.module.css"
import { Achievement } from "../../../models/Achievement"
import { FlutterApp } from "../../../models/FlutterApp"
import AchievementCell from "../AchievementCell"
import FlutterAppCell from "../../FlutterAppCell"

const AchievementGrid: React.FC<{achievements: Achievement[]}> = (props) => {
    return (
        <div className={styles.achievementGrid}>
            {props.achievements.map(achievement => {
                if ((achievement as FlutterApp).links) {
                    return <FlutterAppCell key={achievement.name} app={achievement as FlutterApp} />
                }
                let link: string = "link" in achievement ? (achievement.link as string) : ""
                return <AchievementCell key={achievement.name} achievement={achievement} link={link} />
            })}
        </div>
    )
}

export default AchievementGrid