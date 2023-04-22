import { useState, useEffect } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSource from './assets/json/open-source.json'
import vois from './assets/json/vois.json'
import JobAppsView from './components/JobAppsView'

function App() {
  return (
    <div>
      <JobAppsView title={"Free Lance"} jobApps={freeLance} />
      <JobAppsView title={"Inova"} jobApps={inova} />
    </div>
  )
}

export default App
