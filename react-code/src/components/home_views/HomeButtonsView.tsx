import React from "react"
import HomeButton from "./HomeButton"
import swift from "../../assets/image/swift.png"
import flutter from "../../assets/image/flutter.png"
import openSource from "../../assets/image/open-source.png"
import linkedIn from "../../assets/image/linked-in.png"

const HomeButtonsView: React.FC = (props) => {
    const imageStyle: React.CSSProperties = {
        width: "15px",
        height: "15px",
        marginTop: "2px",
        marginLeft: "5px"
      }
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            margin: 0,
            marginTop: 10,
            placeItems: "center"
          }}>
          <div>
            <HomeButton title="Projects">
              <img  src={swift} alt="swift" style={imageStyle} />
              <img  src={flutter} alt="flutter" style={imageStyle} />
            </HomeButton>
            <HomeButton title="Libraries">
              <img  src={openSource} alt="open source" style={imageStyle} />
            </HomeButton>
          </div>
          <div>
            <HomeButton title="LinkedIn">
              <img  src={linkedIn} alt="linked in" style={imageStyle} />
            </HomeButton>
            <HomeButton title="Github">
              <img  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" style={imageStyle} />
            </HomeButton>
          </div>
        </div>
    )
}

export default HomeButtonsView