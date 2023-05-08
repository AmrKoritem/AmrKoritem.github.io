import React from "react"
import experience from '../../assets/json/experience.json'
import { Experience } from "../../models/Experience"
import ExpBarSlice from "./ExpBarSlice"

const ExperienceBar: React.FC = (props) => {
  const exp = new Experience(experience)
  const companies = Array.from(new Map(Object.entries(experience)).keys())
  const expBarStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    placeItems: "start"
  }
  return (
    <div style={expBarStyle}>
        {companies.map(company => {
          return (
            <ExpBarSlice key={company} name={company} experience={exp[company as keyof Experience]} />
          )
        })}
    </div>
  )
}

export default ExperienceBar