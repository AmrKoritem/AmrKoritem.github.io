import React from "react"
import { IosApp } from "../models/IosApp"

const IosAppCell: React.FC<{app: IosApp}> = (props) => {
    let cellStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "20px",
        marginLeft: "20px"
    }
    let imageStyle: React.CSSProperties = { width: "100px", height: "100px", borderRadius: "22%" }
    return (
        <div key={props.app.name} style={cellStyle}>
            <img  src={props.app.image.link} alt={props.app.image.alt} style={imageStyle} />
            <p>{props.app.name}</p>
        </div>
    )
}

export default IosAppCell