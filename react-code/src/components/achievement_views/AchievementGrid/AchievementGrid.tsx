import React from "react";

import styles from "./AchievementGrid.module.css";
import { Company } from "../../../models/Company";
import { FlutterApp } from "../../../models/FlutterApp";
import FlutterAppCell from "../../FlutterAppCell";
import AchievementCell from "../AchievementCell";

const AchievementGrid: React.FC<{ achievements: Company[] }> = (props) => {
  return (
    <div className={styles.achievementGrid}>
      {props.achievements.map((company) => {
        let link: string =
          "link" in company.achievement
            ? (company.achievement.link as string)
            : "";
        return (
          <AchievementCell
            key={company.achievement.name}
            company={company}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default AchievementGrid;
