import { useState } from 'react'
import amrKoritem from './assets/image/amr-koritem.png'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSource from './assets/json/open-source.json'
import vois from './assets/json/vois.json'
import JobAppsView from './components/JobAppsView'
import AchievementList from './components/AchievementList'
import AllAchievementsView from './components/AllAchievementsView'
import { Achievement } from './models/Achievement'
import AchievementHeader from './components/AchievementHeader'

function InfoHeader() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img src={amrKoritem} style={{
        objectPosition: "left top",
        objectFit: "contain",
        width: "15%",
        minWidth: "200px",
        margin: "10px"
      }} />
      <div style={{ marginLeft: "10px" }}>
        <h2>Amr Mohamed Mohamed Koritem</h2>
        <p>I'm a mobile developer who's both hardworking and passionate about creating and developing new solutions for every day problems using software.</p>
        <p>Working since 2019. Mainly, as iOS but have also worked as:</p>
        <ul>
          <li>Flutter developer</li>
          <li>React Native developer</li>
        </ul>
      </div>
    </div>
  )
}

function groupingView() {
  const swiftLibs = openSource.swift
  return (
    <>
      <AchievementHeader title="Libraries" />
      <AchievementList achievements={swiftLibs} />
      <JobAppsView title={"VOIS"} jobApps={vois} />
      <JobAppsView title={"Free Lance"} jobApps={freeLance} />
      <JobAppsView title={"Inova"} jobApps={inova} />
    </>
  )
}

function App() {
  let [isGroupingMode, setIsGroupingMode] = useState(false)
  if (isGroupingMode) {
    return (
      <>
        {InfoHeader()}
        {groupingView()}
      </>
    )
  }
  const libs = openSource.swift as Achievement[]
  const allAchievements = libs.concat(vois.ios).concat(freeLance.ios).concat(inova.ios)
  return (
    <>
      {InfoHeader()}
      <AllAchievementsView achievements={allAchievements} flutterApps={inova.flutter} />
    </>
  )
}

export default App
