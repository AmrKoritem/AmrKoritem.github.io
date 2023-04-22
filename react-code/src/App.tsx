import { useState, useEffect } from 'react'
import freeLance from './assets/json/free-lance.json'
import inova from './assets/json/inova.json'
import openSource from './assets/json/open-source.json'
import vois from './assets/json/vois.json'
import IosAppList from './components/IosAppList'
import { JsonData } from './models/JsonData'
import { IosApp } from './models/IosApp'

function App() {
  let iosApps = freeLance.iOS

  return (
    <div>
      <h2>Free lance</h2>
      <IosAppList iosApps={iosApps} />
    </div>
  )
}

export default App
