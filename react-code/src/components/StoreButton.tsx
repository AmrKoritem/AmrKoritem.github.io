import React from "react"
import playStoreBadge from "../assets/image/google-play-badge.png"

const StoreButton: React.FC<{link: string, isAppStore: boolean}> = (props) => {
    const appStoreBadge = "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1625097600"
    return (
        <a
        href={props.link}
        style={{display: "inlineBlock", overflow: "hidden"}}>
            <img
            src={props.isAppStore ? appStoreBadge : playStoreBadge}
            alt={`Download on the ${props.isAppStore ? "App" : "Play"} Store`}
            style={{width: "125px", height: "40px"}} />
        </a>
    )
}

export default StoreButton