import React from "react"
import { useState } from 'react'

import freeLance from '../../../assets/json/free-lance.json'
import inova from '../../../assets/json/inova.json'
import openSourceLib from '../../../assets/json/open-source.json'
import vois from '../../../assets/json/vois.json'

import { Achievement } from '../../../models/Achievement'
import styles from "./HomeView.module.css"
import HomeDescription from "../HomeDescription"
import HomeButtonsView from "../HomeButtonsView"
import AchievementHeader from '../../achievement_views/AchievementHeader'
import AchievementGrid from './../../achievement_views/AchievementGrid/AchievementGrid'

enum Tab {
    none,
    projects,
    libraries
}

const HomeView: React.FC = (props) => {
    let [currentTab, setCurrentTab] = useState(Tab.none)
    const updateCurrentTab = (tab: Tab) => {
        if (tab != Tab.none) {
            document.body.style.display = "block"
        } else {
            document.body.style.display = "flex"
        }
        setCurrentTab(tab)
    }
    const libs = openSourceLib.swift as Achievement[]
    const achievements = libs.concat(vois.ios).concat(freeLance.ios).concat(inova.ios)
    let projectsView = <></>
    if (currentTab === Tab.projects) {
        projectsView = (
            <>
                <AchievementHeader title="Mobile Apps" />
                <h4>----- iOS -----</h4>
                <AchievementGrid achievements={achievements} />
                <h4>----- Flutter -----</h4>
                <AchievementGrid achievements={inova.flutter} />
            </>
        )
    }
    if (currentTab === Tab.libraries) {
        projectsView = (
            <>
                <AchievementHeader title="Open Source Libraries" />
                <AchievementGrid achievements={openSourceLib.swift} />
            </>
        )
    }
    return (
        <>
            <div className={styles.homeView}>
                <HomeDescription />
                <HomeButtonsView
                    projectsOnClickHandler={() => {updateCurrentTab(Tab.projects)}}
                    librariesOnClickHandler={() => {updateCurrentTab(Tab.libraries)}}
                    onBlurHandler={() => {updateCurrentTab(Tab.none)}} />
            </div>
            {projectsView}
        </>
    )
}

export default HomeView