import React from "react"
import amrKoritem from '../assets/image/amr-koritem.png'
import ExperienceBar from "./ExperienceBar"

const PersonalInfo: React.FC = (props) => {
  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row"
  }
  const textMarginStyle: React.CSSProperties = {
    marginLeft: 10,
    marginRight: 10
  }
  return (
    <>
      <h2 style={{margin: 5}}>Personal Info:</h2>
      <div style={rowStyle}>
        <p><b>Name:</b></p>
        <p style={textMarginStyle}>Amr Mohamed Mohamed ElTaieb Koritem</p>
      </div>
      <div style={rowStyle}>
        <p><b>Date of birth:</b></p>
        <p style={textMarginStyle}>13/04/1992</p>
      </div>
      <div style={rowStyle}>
        <p><b>Military status:</b></p>
        <p style={textMarginStyle}>Permanently Exempted</p>
      </div>
      <div style={rowStyle}>
        <p><b>Marital status:</b></p>
        <p style={textMarginStyle}>Married</p>
      </div>
    </>
  )
}

const TechnicalInfo: React.FC = (props) => {
  return (
    <div style={{marginLeft: 10, marginRight: 10}}>
      <h2 style={{margin: 0}}>Technical Info:</h2>
      <p>I'm a mobile developer who's both hardworking and passionate about creating and developing new solutions for every day problems using software.</p>
      <p>Working since 2019, mainly as an <b>iOS developer</b> but have also worked as a <b>Flutter developer</b></p>
      <div style={{display: "flex", flexDirection: "row"}}>
        <h5 style={{marginTop: 10, marginBottom: 5}}>Experience:</h5>
        <p style={{marginTop: 11, marginLeft: 5, fontSize: 12}}>(In addition to freelancing and working on open source projects)</p>
      </div>
      <ExperienceBar />
    </div>
  )
}

const InfoView: React.FC = (props) => {
  const imageStyle: React.CSSProperties = {
    objectPosition: "left top",
    objectFit: "contain",
    width: "15%",
    minWidth: "150px",
    margin: 10
  }
  return (
    <div style={{padding: 10, maxHeight: "80%", display: "flex", flexDirection: "column", textAlign: "start", backgroundColor: "#1a1a1a"}}>
      <div style={{display: "flex", flexDirection: "row"}}>
        <img src={amrKoritem} style={imageStyle} />
        <div style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}>
          <PersonalInfo />
        </div>
      </div>
      <TechnicalInfo />
    </div>
  )
}

export default InfoView