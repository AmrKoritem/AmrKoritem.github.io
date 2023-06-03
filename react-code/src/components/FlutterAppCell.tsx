import React from "react";
import { FlutterApp } from "../models/FlutterApp";
import AchievementCell from "./achievement_views/AchievementCell";
import StoreButton from "./StoreButton";

const FlutterAppCell: React.FC<{ app: FlutterApp }> = (props) => {
  const cellStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
  };
  return (
    <div style={cellStyle}>
      <AchievementCell key={props.app.name} achievement={props.app} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <StoreButton link={props.app.links.app_store} isAppStore={true} />
        <StoreButton link={props.app.links.play_store} isAppStore={false} />
      </div>
    </div>
  );
};

export default FlutterAppCell;
