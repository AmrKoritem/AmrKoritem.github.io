import React from "react"
import { JobApps } from "../models/JobApps"
import AchievementList from "./AchievementList"
import FlutterAppList from "./FlutterAppList"
import AchievementHeader from "./AchievementHeader"

const JobAppView: React.FC<{title: string, jobApps: JobApps}> = (props) => {
    let headerStyle: React.CSSProperties = { marginRight: "10px", marginLeft: "10px" }
    return (
        <>
            <AchievementHeader title={props.title} />
            {props.jobApps.ios && <AchievementList achievements={props.jobApps.ios} />}
            {props.jobApps.flutter && <FlutterAppList flutterApps={props.jobApps.flutter} />}
        </>
    )
}

export default JobAppView