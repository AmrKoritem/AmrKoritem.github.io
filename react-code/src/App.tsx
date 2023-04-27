import { useState } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSource from './assets/json/open-source.json'
import vois from './assets/json/vois.json'
import JobAppsView from './components/JobAppsView'
import AchievementList from './components/AchievementList'
import AllAchievementsView from './components/AllAchievementsView'
import { Achievement } from './models/Achievement'
import AchievementHeader from './components/AchievementHeader'

function groupingView() {
  let swiftLibs = openSource.swift
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
    return groupingView()
  }
  const libs = openSource.swift as Achievement[]
  const allAchievements = libs.concat(vois.ios).concat(freeLance.ios).concat(inova.ios)
  return (
    <AllAchievementsView achievements={allAchievements} flutterApps={inova.flutter} />
  )
}

export default App
