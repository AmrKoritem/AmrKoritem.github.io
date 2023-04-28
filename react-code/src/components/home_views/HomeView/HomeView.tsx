import React from "react"
import styles from "./HomeView.module.css"
import HomeDescription from "../HomeDescription"
import HomeButtonsView from "../HomeButtonsView"

const HomeView: React.FC = (props) => {
    return (
        <div  className={styles.homeView}>
            <HomeDescription />
            <HomeButtonsView />
        </div>
    )
}

export default HomeView