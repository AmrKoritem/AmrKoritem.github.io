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
import AchievementGrid from './../../achievement_views/AchievementGrid'
import InfoView from "../../InfoView"
import OverlayView from "../../OverlayView"
import ContactsView from "../../ContactsView"

enum Tab {
    none,
    projects,
    libraries
}

const ProjectsView: React.FC = (props) => {
    const inovaIos: Achievement[] = vois.ios
    const achievements = inovaIos.concat(freeLance.ios).concat(inova.ios)
    return (
        <>
            <AchievementHeader title="Mobile Apps" />
            <h4>----- iOS -----</h4>
            <AchievementGrid achievements={achievements} />
            <h4>----- Flutter -----</h4>
            <AchievementGrid achievements={inova.flutter} />
        </>
    )
}

const LibrariesView: React.FC = (props) => {
    return (
        <>
            <AchievementHeader title="Open Source Libraries" />
            <AchievementGrid achievements={openSourceLib.swift} />
        </>
    )
}

const HomeView: React.FC = (props) => {
    const [isContactMe, setIsContactMe] = useState(false)
    const [isSummary, setIsSummary] = useState(false)
    const [currentTab, setCurrentTab] = useState(Tab.none)
    const updateContactMe = (willContactMe: boolean) => {
        setIsContactMe(willContactMe)
    }
    const updateSummary = (willSummary: boolean) => {
        setIsSummary(willSummary)
    }
    const updateCurrentTab = (tab: Tab) => {
        if (tab != Tab.none) {
            document.body.style.display = "block"
        } else {
            document.body.style.display = "flex"
        }
        setCurrentTab(tab)
    }
    return (
        <>
            <div className={styles.homeView}>
                <HomeDescription />
                <HomeButtonsView
                    projectsOnClickHandler={() => {updateCurrentTab(Tab.projects)}}
                    librariesOnClickHandler={() => {updateCurrentTab(Tab.libraries)}}
                    summaryOnClickHandler={() => {updateSummary(true)}}
                    contactMeOnClickHandler={() => {updateContactMe(true)}}
                    onBlurHandler={() => {}} />
            </div>
            {currentTab === Tab.projects && <ProjectsView />}
            {currentTab === Tab.libraries && <LibrariesView />}
            {isSummary && <OverlayView onCancelHandler={() => {updateSummary(false)}}><InfoView /></OverlayView>}
            {isContactMe && <OverlayView onCancelHandler={() => {updateContactMe(false)}}><ContactsView /></OverlayView>}
        </>
    )
}

export default HomeView