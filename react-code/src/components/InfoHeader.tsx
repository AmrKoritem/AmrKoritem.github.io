import React from "react"
import amrKoritem from '../assets/image/amr-koritem.png'
import ExperienceBar from "./ExperienceBar"

const InfoHeader: React.FC = (props) => {
  const imageStyle: React.CSSProperties = {
    objectPosition: "left top",
    objectFit: "contain",
    width: "15%",
    minWidth: "200px",
    margin: "10px"
  }
  return (
    <div style={{display: "flex", flexDirection: "row", textAlign: "start", backgroundColor: "#1a1a1a"}}>
      <img src={amrKoritem} style={imageStyle} />
      <div style={{marginLeft: "10px", marginRight: "10px", marginBottom: "10px"}}>
        <h2>Technical Info:</h2>
        <p>I'm a mobile developer who's both hardworking and passionate about creating and developing new solutions for every day problems using software.</p>
        <p>Working since 2019, mainly as an <b>iOS developer</b> but have also worked as a <b>Flutter developer</b></p>
        <div style={{display: "flex", flexDirection: "row"}}>
          <h5 style={{marginTop: 10, marginBottom: 5}}>Experience:</h5>
          <p style={{marginTop: 10, marginLeft: 5, fontSize: 12}}>(In addition to freelancing and working on open source projects)</p>
        </div>
        <ExperienceBar />
      </div>
    </div>
  )
}

export default InfoHeader