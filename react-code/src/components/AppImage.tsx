import React from "react"
import underDevelopment from "../assets/image/under-development.png"

const AppImage: React.FC<{link: string, alt: string}> = (props) => {
    let link = props.link === "" ? underDevelopment : props.link
    let imageStyle: React.CSSProperties = {
        width: "100px",
        height: "100px",
        borderRadius: "22%",
        borderStyle: "solid",
        borderWidth: "thin",
        padding: "10px",
    }
    imageStyle.borderColor = props.link === "" ? "gray" : "transparent"
    return (
        <img  src={link} alt={props.alt} style={imageStyle} />
    )
}

export default AppImage