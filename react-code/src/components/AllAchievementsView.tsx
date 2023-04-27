import React from "react"
import { Achievement } from "../models/Achievement"
import { FlutterApp } from "../models/FlutterApp"
import AchievementGrid from "./AchievementGrid"
import AchievementHeader from "./AchievementHeader"

const AllAchievementsView: React.FC<{achievements: Achievement[], flutterApps: FlutterApp[]}> = (props) => {
    return (
        <>
            <AchievementHeader title="iOS" />
            <AchievementGrid achievements={props.achievements} />
            <AchievementHeader title="Flutter" />
            <AchievementGrid achievements={props.flutterApps} />
        </>
    )
}

export default AllAchievementsView