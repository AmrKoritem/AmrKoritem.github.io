import React from "react";

type Props = {
  title: string;
  children: string | JSX.Element | JSX.Element[];
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDownHandler?: React.MouseEventHandler<HTMLButtonElement>;
  onBlurHandler?: React.FocusEventHandler<HTMLButtonElement>;
};

const HomeButton: React.FC<Props> = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    minWidth: "150px",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  };
  return (
    <button
      onClick={props.onClickHandler}
      onMouseDown={props.onMouseDownHandler}
      onBlur={props.onBlurHandler}
      type="button"
      style={style}
    >
      <p style={{color: "rgba(255, 255, 255, 0.87)"}}>{props.title}</p>
      {props.children}
    </button>
  );
};

export default HomeButton;
