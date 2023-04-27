import React from "react"

const AchievementHeader: React.FC<{title: string}> = (props) => {
    return (
        <h3 style={{marginRight: "10px", marginLeft: "10px"}}>{props.title}</h3>
    )
}

export default AchievementHeader