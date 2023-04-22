import React from "react"
import { JobApps } from "../models/JobApps"
import IosAppList from "./IosAppList"
import FlutterAppList from "./FlutterAppList"

const JobAppView: React.FC<{title: string, jobApps: JobApps}> = (props) => {
    let headerStyle: React.CSSProperties = { marginRight: "10px", marginLeft: "10px" }
    return (
        <>
            <h2 style={headerStyle}>{props.title}</h2>
            {props.jobApps.ios && <IosAppList iosApps={props.jobApps.ios} />}
            {props.jobApps.flutter && <FlutterAppList flutterApps={props.jobApps.flutter} />}
        </>
    )
}

export default JobAppView