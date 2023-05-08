import React from "react"
import underDevelopment from "../assets/image/under-development.png"
import vois from "../assets/image/vois.png"
import removed from "../assets/image/removed.png"

const AppImage: React.FC<{link: string, alt: string}> = (props) => {
    const appImageLink = props.link == "removed.png" ? removed :
                        props.link === "vois.png" ? vois :
                        props.link
    const link = props.link === "" ? underDevelopment : appImageLink
    const imageStyle: React.CSSProperties = {
        width: "100px",
        height: "100px",
        borderRadius: "22%",
        borderStyle: "solid",
        borderWidth: "thin",
        padding: "10px",
        objectFit: "fill"
    }
    imageStyle.borderColor = props.link === "" ? "#1a1a1a" : "transparent"
    return (
        <img  src={link} alt={props.alt} style={imageStyle} />
    )
}

export default AppImage