import React from "react"
import { IosApp } from "../models/IosApp"
import AppImage from "./AppImage"

const IosAppCell: React.FC<{app: IosApp}> = (props) => {
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

export default IosAppCell