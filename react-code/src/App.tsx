import { useState } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSourceLib from './assets/json/open-source.json'
import vois from './assets/json/vois.json'

import { Achievement } from './models/Achievement'
import JobAppsView from './components/JobAppsView'
import InfoHeader from './components/InfoHeader'
import AchievementList from './components/achievement_views/AchievementList'
import AchievementHeader from './components/achievement_views/AchievementHeader'
import AchievementGrid from './components/achievement_views/AchievementGrid/AchievementGrid'
import HomeDescription from './components/home_views/HomeDescription'
import HomeButtonsView from './components/home_views/HomeButtonsView'

function App() {
  return (
    <div style={{
        display: "flex",
        margin: 0,
        alignContent: "space-around"
      }}>
      <HomeDescription />
      <HomeButtonsView />
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
