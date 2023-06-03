import React from "react";

import AchievementCell from "./AchievementCell";
import { Company } from "../../models/Company";

const AchievementList: React.FC<{ companies: Company[] }> = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll" }}>
      {props.companies.map((company) => {
        const achievement = company.achievement;
        const link: string =
          "link" in achievement ? (achievement.link as string) : "";
        return (
          <AchievementCell
            key={achievement.name}
            company={company}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default AchievementList;
