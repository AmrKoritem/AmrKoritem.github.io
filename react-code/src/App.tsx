import { useState, useEffect } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSource from './assets/json/open-source.json'
import vois from './assets/json/vois.json'
import JobAppsView from './components/JobAppsView'
import AchievementList from './components/AchievementList'

function App() {
  let swiftLibs = openSource.swift
  return (
    <>
      <h2 style={{ marginRight: "10px", marginLeft: "10px" }}>Libraries</h2>
      <AchievementList achievements={swiftLibs} />
      <JobAppsView title={"VOIS"} jobApps={vois} />
      <JobAppsView title={"Free Lance"} jobApps={freeLance} />
      <JobAppsView title={"Inova"} jobApps={inova} />
    </>
  )
}

export default App
