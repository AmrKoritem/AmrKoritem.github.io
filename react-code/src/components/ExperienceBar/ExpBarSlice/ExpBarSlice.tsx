import React from "react"
import styles from "./ExpBarSlice.module.css"
import { CompanyExperience } from "../../../models/Experience"

const ExpBarSlice: React.FC<{name: string, experience: CompanyExperience}> = (props) => {
    const percentage = props.experience.getPercentageComparedToNow()
    const monthsYears = props.experience.getMonthsYearsStr()
    const startDate = props.experience.from.slice(3)
    const isTightView = props.experience.getYears() == 0 && props.experience.getMonths() < 6
    const endDate = props.experience.to != "present" ? props.experience.to.slice(3) : props.experience.to
    const dateStyle: React.CSSProperties = {
      marginLeft: 5,
      marginRight: 5,
      fontSize: 12
    }
    const centerStyle: React.CSSProperties = {flex: 1, textAlign: "center"}
    const textsView = isTightView ? (
      <div className={styles.expBarSlice} style={{backgroundColor: props.experience.color}}>
        <p className={styles.expDate} style={dateStyle}>{`${startDate} ->`}</p>
      </div>
    ) : (
      <div className={styles.expBarSlice} style={{backgroundColor: props.experience.color}}>
        <p className={styles.expDate} style={dateStyle}>{startDate}</p>
        <p style={centerStyle}>{monthsYears}</p>
        <p className={styles.expDate} style={dateStyle}>{endDate}</p>
      </div>
    )
    return (
      <div style={{display: "flex", flexDirection: "column", margin: 0, width: `${percentage}%`}}>
          <p style={centerStyle}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
          {textsView}
      </div>
    )
}

export default ExpBarSlice