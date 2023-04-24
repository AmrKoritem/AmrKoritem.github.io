import React from "react"
import { FlutterApp } from "../models/FlutterApp"
import FlutterAppCell from "./FlutterAppCell"

const FlutterAppList: React.FC<{flutterApps: FlutterApp[]}> = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
            {props.flutterApps.map(app => <FlutterAppCell key={app.name} app={app} />)}
        </div>
    )
}

export default FlutterAppList