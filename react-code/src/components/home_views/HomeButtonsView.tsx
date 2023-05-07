import React from "react"
import HomeButton from "./HomeButton"
import swift from "../../assets/image/swift.png"
import flutter from "../../assets/image/flutter.png"
import openSource from "../../assets/image/open-source.png"
import summary from "../../assets/image/summary.png"
import linkedIn from "../../assets/image/linked-in.png"
import contactMe from "../../assets/image/contact-me.png"

type Props = {
  projectsOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  librariesOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  summaryOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  contactMeOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  onBlurHandler: (React.FocusEventHandler<HTMLButtonElement>)
}

type AchievementsProps = {
  projectsOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  librariesOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  summaryOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>)
  onBlurHandler: (React.FocusEventHandler<HTMLButtonElement>)
}

const imageStyle: React.CSSProperties = {
  width: "15px",
  height: "15px",
  marginTop: "2px",
  marginLeft: "5px"
}

const Achievements: React.FC<AchievementsProps> = (props) => {
  return (
    <div>
      <HomeButton title="Projects" onClickHandler={props.projectsOnClickHandler} onBlurHandler={props.onBlurHandler}>
        <img  src={swift} alt="swift" style={imageStyle} />
        <img  src={flutter} alt="flutter" style={imageStyle} />
      </HomeButton>
      <HomeButton title="Libraries" onClickHandler={props.librariesOnClickHandler} onBlurHandler={props.onBlurHandler}>
        <img  src={openSource} alt="open source" style={imageStyle} />
      </HomeButton>
      <HomeButton title="Summary" onClickHandler={props.summaryOnClickHandler} onBlurHandler={props.onBlurHandler}>
        <img  src={summary} alt="summary" style={imageStyle} />
      </HomeButton>
    </div>
  )
}

const Links: React.FC<{contactMeOnClickHandler: (React.FocusEventHandler<HTMLButtonElement>), onBlurHandler: (React.FocusEventHandler<HTMLButtonElement>)}> = (props) => {
  const onMouseDownHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()
  }
  return (
    <div>
      <a href="https://www.linkedin.com/in/amr-koritem-976bb0125/" target="_blank">
        <HomeButton title="LinkedIn" onMouseDownHandler={onMouseDownHandler} onBlurHandler={props.onBlurHandler}>
          <img  src={linkedIn} alt="linked in" style={imageStyle} />
        </HomeButton>
      </a>
      <a href="https://github.com/AmrKoritem" target="_blank">
        <HomeButton title="Github" onMouseDownHandler={onMouseDownHandler} onBlurHandler={props.onBlurHandler}>
          <img  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" style={imageStyle} />
        </HomeButton>
      </a>
      <HomeButton title="Contact Me" onClickHandler={props.contactMeOnClickHandler} onBlurHandler={props.onBlurHandler}>
        <img  src={contactMe} alt="contact me" style={imageStyle} />
      </HomeButton>
    </div>
  )
}

const HomeButtonsView: React.FC<Props> = (props) => {
  const rawStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    placeItems: "start"
  }
  return (
    <div style={rawStyle}>
      <Achievements
        projectsOnClickHandler={props.projectsOnClickHandler}
        librariesOnClickHandler={props.librariesOnClickHandler}
        summaryOnClickHandler = {props.summaryOnClickHandler}
        onBlurHandler={props.onBlurHandler} />
      <Links
        contactMeOnClickHandler = {props.contactMeOnClickHandler}
        onBlurHandler={props.onBlurHandler} />
    </div>
  )
}

export default HomeButtonsView