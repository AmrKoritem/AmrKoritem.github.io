import React from "react"
import { JobApps } from "../models/JobApps"
import AchievementList from "./achievement_views/AchievementList"
import FlutterAppList from "./FlutterAppList"
import AchievementHeader from "./achievement_views/AchievementHeader"

const JobAppView: React.FC<{title: string, jobApps: JobApps}> = (props) => {
    return (
        <>
            <AchievementHeader title={props.title} />
            {props.jobApps.ios && <AchievementList achievements={props.jobApps.ios} />}
            {props.jobApps.flutter && <FlutterAppList flutterApps={props.jobApps.flutter} />}
        </>
    )
}

export default JobAppView