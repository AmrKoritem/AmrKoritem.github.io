import React from "react";
import { Company } from "../models/Company";
import AchievementCell from "./achievement_views/AchievementCell";
import StoreButton from "./StoreButton";
import { FlutterApp } from "../models/FlutterApp";

const FlutterAppCell: React.FC<{ company: Company }> = (props) => {
  const flutterApp = props.company.achievement as FlutterApp;
  const cellStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
  };
  return (
    <div style={cellStyle}>
      <AchievementCell
        key={props.company.achievement.name}
        company={props.company}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <StoreButton link={flutterApp.links.app_store} isAppStore={true} />
        <StoreButton link={flutterApp.links.play_store} isAppStore={false} />
      </div>
    </div>
  );
};

export default FlutterAppCell;
