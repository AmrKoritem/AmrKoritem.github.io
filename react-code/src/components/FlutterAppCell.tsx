import React from "react"
import { FlutterApp } from "../models/FlutterApp"
import AppImage from "./AppImage"

const FlutterAppCell: React.FC<{app: FlutterApp}> = (props) => {
    let cellStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px"
    }
    return (
        <div key={props.app.name} style={cellStyle}>
            <AppImage link={props.app.image.link} alt={props.app.image.alt} />
            <p>{props.app.name}</p>
        </div>
    )
}

export default FlutterAppCell