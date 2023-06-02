import React from "react";
import { scrollIntoView } from "seamless-scroll-polyfill";

import freeLance from "../../../assets/json/free-lance.json";
import inova from "../../../assets/json/inova.json";
import openSourceLib from "../../../assets/json/open-source.json";
import vois from "../../../assets/json/vois.json";

import { Achievement } from "../../../models/Achievement";
import styles from "./HomeView.module.css";
import HomeDescription from "../HomeDescription";
import HomeButtonsView from "../HomeButtonsView";
import AchievementHeader from "../../achievement_views/AchievementHeader";
import AchievementGrid from "./../../achievement_views/AchievementGrid";
import InfoView from "../../InfoView";
import ContactsView from "../../ContactsView";

const ProjectsView: React.FC<{ id: string }> = (props) => {
  const inovaIos: Achievement[] = vois.ios;
  const achievements = inovaIos.concat(freeLance.ios).concat(inova.ios);
  return (
    <>
      <AchievementHeader id={props.id} title="↓↓↓ iOS Apps ↓↓↓" />
      <AchievementGrid achievements={achievements} />
      <AchievementHeader title="↓↓↓ Flutter Apps ↓↓↓" />
      <AchievementGrid achievements={inova.flutter} />
    </>
  );
};

const LibrariesView: React.FC<{ id: string }> = (props) => {
  return (
    <>
      <AchievementHeader id={props.id} title="↓↓↓ Open Source Libraries ↓↓↓" />
      <AchievementGrid achievements={openSourceLib.swift} />
    </>
  );
};

const HomeView: React.FC = (props) => {
  const scrollto = (id: string) => {
    const element = document.getElementById(id);
    if (element != null && element != undefined) {
      scrollIntoView(element, {
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className={styles.welcomeView}>
        <HomeDescription />
        <HomeButtonsView
          projectsOnClickHandler={() => {
            scrollto("projects");
          }}
          librariesOnClickHandler={() => {
            scrollto("libraries");
          }}
          summaryOnClickHandler={() => {
            scrollto("summary");
          }}
          contactMeOnClickHandler={() => {
            scrollto("contacts");
          }}
          onBlurHandler={() => {}}
        />
      </div>
      <InfoView id={"summary"} />
      <h2
        style={{
          margin: 0,
          paddingTop: 20,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: "start",
          backgroundColor: "#1a1a1a",
        }}
      >
        Achievements:
      </h2>
      <ProjectsView id={"projects"} />
      <LibrariesView id={"libraries"} />
      <ContactsView id={"contacts"} />
    </>
  );
};

export default HomeView;
