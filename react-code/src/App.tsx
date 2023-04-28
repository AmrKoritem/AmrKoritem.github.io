import { useState } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSourceLib from './assets/json/open-source.json'
import vois from './assets/json/vois.json'

import swift from "./assets/image/swift.png"
import flutter from "./assets/image/flutter.png"
import openSource from "./assets/image/open-source.png"
import linkedIn from "./assets/image/linked-in.png"
import github from "./assets/image/github.png"

import { Achievement } from './models/Achievement'
import JobAppsView from './components/JobAppsView'
import AchievementList from './components/achievement_views/AchievementList'
import AchievementHeader from './components/achievement_views/AchievementHeader'
import InfoHeader from './components/InfoHeader'
import AchievementGrid from './components/achievement_views/AchievementGrid/AchievementGrid'
import HomeButton from './components/HomeButton'

function App() {
  const imageStyle: React.CSSProperties = {
    width: "15px",
    height: "15px",
    marginTop: "2px",
    marginLeft: "5px"
  }
  return (
    <div style={{
        display: "flex",
        margin: 0,
        alignContent: "space-around"
      }}>
      <div>
        <p>I'm a</p>
        <h1>Mobile Developer</h1>
        <p>My name is</p>
        <h1>Amr Koritem</h1>
      </div>
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
    </div>
  )
  let [isGroupingMode, setIsGroupingMode] = useState(false)
  if (isGroupingMode) {
    return (
      <>
        <InfoHeader />
        <AchievementHeader title="Open Source Libraries" />
        <AchievementList achievements={openSourceLib.swift} />
        <JobAppsView title={"VOIS"} jobApps={vois} />
        <JobAppsView title={"Free Lance"} jobApps={freeLance} />
        <JobAppsView title={"Inova"} jobApps={inova} />
      </>
    )
  }
  const libs = openSourceLib.swift as Achievement[]
  const achievements = libs.concat(vois.ios).concat(freeLance.ios).concat(inova.ios)
  return (
    <>
      <InfoHeader />
      <AchievementHeader title="iOS" />
      <AchievementGrid achievements={achievements} />
      <AchievementHeader title="Flutter" />
      <AchievementGrid achievements={inova.flutter} />
    </>
  )
}

export default App
