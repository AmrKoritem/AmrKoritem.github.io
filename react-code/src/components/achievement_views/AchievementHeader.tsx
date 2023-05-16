import React from "react";

const AchievementHeader: React.FC<{ title: string }> = (props) => {
  return (
    <h3 style={{ backgroundColor: "#606060", margin: 0, padding: 10 }}>
      {props.title}
    </h3>
  );
};

export default AchievementHeader;
