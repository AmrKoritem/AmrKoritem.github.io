import React from "react"
import HomeButton from "./HomeButton"
import swift from "../../assets/image/swift.png"
import flutter from "../../assets/image/flutter.png"
import openSource from "../../assets/image/open-source.png"
import linkedIn from "../../assets/image/linked-in.png"

type Props = {
  projectsOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  librariesOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  onBlurHandler: (React.FocusEventHandler<HTMLButtonElement>)
}

const HomeButtonsView: React.FC<Props> = (props) => {
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
            <HomeButton
              title="Projects"
              onClickHandler={props.projectsOnClickHandler}
              onBlurHandler={props.onBlurHandler}>
              <img  src={swift} alt="swift" style={imageStyle} />
              <img  src={flutter} alt="flutter" style={imageStyle} />
            </HomeButton>
            <HomeButton
              title="Libraries"
              onClickHandler={props.librariesOnClickHandler}
              onBlurHandler={props.onBlurHandler}>
              <img  src={openSource} alt="open source" style={imageStyle} />
            </HomeButton>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/amr-koritem-976bb0125/" target="_blank">
              <HomeButton
                title="LinkedIn"
                onMouseDownHandler={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
                onBlurHandler={props.onBlurHandler}>
                <img  src={linkedIn} alt="linked in" style={imageStyle} />
              </HomeButton>
            </a>
            <a href="https://github.com/AmrKoritem" target="_blank">
              <HomeButton
                title="Github"
                onMouseDownHandler={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
                onBlurHandler={props.onBlurHandler}>
                <img  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" style={imageStyle} />
              </HomeButton>
            </a>
          </div>
        </div>
    )
}

export default HomeButtonsView