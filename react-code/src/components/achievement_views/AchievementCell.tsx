import React from "react";

import inova from "../../assets/image/inova.png";
import vodafone from "../../assets/image/vodafone.svg";
import freeLance from "../../assets/image/free-lance.png";
import swift from "../../assets/image/swift.png";
import objects from "../../assets/image/objects.png";

import { Company } from "../../models/Company";
import AppImage from "../AppImage";
import { CrossPlatformApp } from "../../models/CrossPlatformApp";
import StoreButton from "../StoreButton";

const InovaView: React.FC = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 3,
    margin: 5,
  };
  const imageStyle: React.CSSProperties = {
    width: 70,
    height: 15,
    objectFit: "fill",
  };
  return (
    <div style={style}>
      <p style={{ textAlign: "center", marginRight: 5, marginLeft: 5 }}>
        Under
      </p>
      <img src={inova} alt={"inova"} style={imageStyle} />
    </div>
  );
};

const FreeLanceView: React.FC = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 3,
    margin: 5,
  };
  const imageStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    objectFit: "fill",
    backgroundColor: "white",
  };
  return (
    <div style={style}>
      <p style={{ textAlign: "center", marginRight: 5, marginLeft: 5 }}>
        As a freelancer
      </p>
      <img src={freeLance} alt={"free lance"} style={imageStyle} />
    </div>
  );
};

const VodafoneView: React.FC = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 3,
    margin: 5,
  };
  const imageStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    objectFit: "fill",
  };
  return (
    <div style={style}>
      <p style={{ textAlign: "center", marginRight: 5, marginLeft: 5 }}>
        Under VOIS
      </p>
      <img src={vodafone} alt={"vois"} style={imageStyle} />
    </div>
  );
};

const SwiftView: React.FC = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 3,
    margin: 5,
  };
  const imageStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    objectFit: "fill",
  };
  return (
    <div style={style}>
      <p style={{ textAlign: "center", marginRight: 5, marginLeft: 5 }}>
        In swift
      </p>
      <img src={swift} alt={"swift"} style={imageStyle} />
    </div>
  );
};

const ObjectsView: React.FC = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 3,
    margin: 5,
  };
  const imageStyle: React.CSSProperties = {
    width: 70,
    height: 20,
    objectFit: "fill",
    marginTop: 4,
  };
  return (
    <div style={style}>
      <p style={{ textAlign: "center", marginRight: 5, marginLeft: 5 }}>
        Under
      </p>
      <img src={objects} alt={"objects"} style={imageStyle} />
    </div>
  );
};

const CompanyView: React.FC<{ name: string }> = (props) => {
  if (props.name == "inova") {
    return <InovaView />;
  }
  if (props.name == "free lance") {
    return <FreeLanceView />;
  }
  if (props.name == "vois") {
    return <VodafoneView />;
  }
  if (props.name == "swift") {
    return <SwiftView />;
  }
  if (props.name == "objects") {
    return <ObjectsView />;
  }
  return <></>;
};

const StoresView: React.FC<{
  appStore: string;
  playStore: string;
}> = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: 0 }}>
      <StoreButton link={props.appStore} isAppStore={true} />
      <StoreButton link={props.playStore} isAppStore={false} />
    </div>
  );
};

const AchievementCell: React.FC<{ company: Company; link?: string }> = (
  props
) => {
  const flutterApp = props.company.achievement as CrossPlatformApp;
  const cellStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: 180,
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
  };
  return (
    <div style={cellStyle}>
      <a href={props.link}>
        <AppImage
          link={props.company.achievement.image.link}
          alt={props.company.achievement.image.alt}
        />
      </a>
      <p style={{ textAlign: "center", marginTop: "0" }}>
        {props.company.achievement.name}
      </p>
      {flutterApp.links !== undefined && (
        <StoresView
          appStore={flutterApp.links.app_store}
          playStore={flutterApp.links.play_store}
        />
      )}
      <CompanyView name={props.company.name} />
    </div>
  );
};

export default AchievementCell;
