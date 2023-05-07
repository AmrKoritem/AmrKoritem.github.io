import React from "react"

const ContactsView: React.FC = (props) => {
  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row"
  }
  const textMarginStyle: React.CSSProperties = {
    marginLeft: 10,
    marginRight: 10
  }
  return (
    <div style={{padding: 15, textAlign: "start", backgroundColor: "#1a1a1a"}}>
        <h3 style={{textAlign: "center"}}>Contacts</h3>
        <div style={rowStyle}>
            <p><b>Phone number:</b></p>
            <p style={textMarginStyle}>+20 1144754506</p>
        </div>
        <div style={rowStyle}>
            <p><b>Telephone number:</b></p>
            <p style={textMarginStyle}>+2/03 5258475</p>
        </div>
        <div style={rowStyle}>
            <p><b>Email:</b></p>
            <a style={textMarginStyle} href="amr.koritem92@gmail.com">amr.koritem92@gmail.com</a>
        </div>
        <div style={rowStyle}>
            <p><b>Address:</b></p>
            <p style={textMarginStyle}>El Salam Tower Mostafa Kamel Street, El Seof, Alexandria, Egypt.</p>
        </div>
    </div>
  )
}

export default ContactsView