import React from "react"
import { CompanyExperience } from "../models/Experience"

const ExpBarSlice: React.FC<{name: string, experience: CompanyExperience}> = (props) => {
    const percentage = props.experience.getPercentageComparedToNow()
    const monthsYears = props.experience.getMonthsYearsStr()
    const startDate = props.experience.from.slice(3)
    const endDate = props.experience.to != "present" ? props.experience.to.slice(3) : props.experience.to
    const barStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "30px",
      backgroundColor: props.experience.color,
      margin: 0,
      alignItems: "center"
    }
    const dateStyle: React.CSSProperties = {
      marginLeft: 5,
      marginRight: 5,
      fontSize: 12
    }
    const centerStyle: React.CSSProperties = {flex: 1, textAlign: "center"}
    return (
      <div style={{display: "flex", flexDirection: "column", margin: 0, width: percentage}}>
          <p style={centerStyle}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
          <div style={barStyle}>
            <p style={dateStyle}>{startDate}</p>
            <p style={centerStyle}>{monthsYears}</p>
            <p style={dateStyle}>{endDate}</p>
          </div>
      </div>
    )
}

export default ExpBarSlice