import React from "react";

const HomeDescription: React.FC = (props) => {
  const imageStyle: React.CSSProperties = {
    width: "15px",
    height: "15px",
    marginTop: "2px",
    marginLeft: "5px",
  };
  const rawStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div>
      <p>My name is</p>
      <h1>Amr Koritem</h1>
      <p>I'm a</p>
      <h1>Mobile Developer</h1>
    </div>
  );
};

export default HomeDescription;
