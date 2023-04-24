import React from "react"
import { IosApp } from "../models/IosApp"
import AchievementCell from "./AchievementCell"

const IosAppList: React.FC<{iosApps: IosApp[]}> = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
            {props.iosApps.map(app => <AchievementCell key={app.name} achievement={app} link={app.link} />)}
        </div>
    )
}

export default IosAppList