import React from "react"
import amrKoritem from '../assets/image/amr-koritem.png'

const InfoHeader: React.FC = (props) => {
    const imageStyle: React.CSSProperties = {
      objectPosition: "left top",
      objectFit: "contain",
      width: "15%",
      minWidth: "200px",
      margin: "10px"
    }
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={amrKoritem} style={imageStyle} />
        <div style={{ marginLeft: "10px" }}>
          <h2>Amr Mohamed Mohamed Koritem</h2>
          <p>I'm a mobile developer who's both hardworking and passionate about creating and developing new solutions for every day problems using software.</p>
          <p>Working since 2019, mainly as an iOS developer but have also worked as a Flutter developer</p>
          {/* <ul>
            <li>Flutter developer</li>
          </ul> */}
        </div>
      </div>
    )
  }

export default InfoHeader