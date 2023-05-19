import React from "react";

const AchievementHeader: React.FC<{id?: string, title: string}> = (props) => {
  return (
    <h3 id={props.id} style={{ backgroundColor: "#606060", margin: 0, padding: 10 }}>
      {props.title}
    </h3>
  );
};

export default AchievementHeader;
