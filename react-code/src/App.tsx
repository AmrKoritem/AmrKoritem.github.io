import { useState, useEffect } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSource from './assets/json/open-source.json'
import vois from './assets/json/vois.json'
import JobAppsView from './components/JobAppsView'
import AchievementCell from './components/AchievementCell'

function App() {
  let swiftLibs = openSource.swift
  return (
    <div>
      <h2 style={{ marginRight: "10px", marginLeft: "10px" }}>Libraries</h2>
      <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
          {swiftLibs.map(lib => <AchievementCell key={lib.name} achievement={lib} link={lib.link} />)}
      </div>
      <JobAppsView title={"VOIS"} jobApps={vois} />
      <JobAppsView title={"Free Lance"} jobApps={freeLance} />
      <JobAppsView title={"Inova"} jobApps={inova} />
    </div>
  )
}

export default App
