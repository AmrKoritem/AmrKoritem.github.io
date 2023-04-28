import React from "react"

type Props = {
    title: string
    children: string | JSX.Element | JSX.Element[]
}

const HomeButton: React.FC<Props> = (props) => {
    const style: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        minWidth: "150px",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    }
    return (
        <button type="button" style={style}>
            <p>{props.title}</p>
            {props.children}
        </button>
    )
}

export default HomeButton