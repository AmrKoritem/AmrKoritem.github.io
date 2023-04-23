import React from "react"
import { IosApp } from "../models/IosApp"
import IosAppCell from "./IosAppCell"

const IosAppList: React.FC<{iosApps: IosApp[]}> = (props) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
            {props.iosApps.map(app => <IosAppCell key={app.name} app={app} />)}
            </div>
        </>
    )
}

export default IosAppList