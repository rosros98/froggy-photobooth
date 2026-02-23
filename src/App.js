import './App.css';
import "./styles/global.css";
import React from 'react';
import PhotoBooth from "./components/Photobooth";

const logoSrc = "/assets/logo/froggy-logo.PNG";

function App() {
  return (
    <div className="App" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        width: "100%",
        maxWidth: 1200,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "20px 32px"
      }}>
        <img src={logoSrc} alt='Froggy Logo' style={{ width: 50 }} />
        <h1 style={{
          fontFamily: "Cantika Cute",
          color: "#6db476",
          margin: 0
        }}>
          Froggy Booth
          <h6 style={{
            fontFamily: "Cantika Cute",
            fontStyle: 'italic',
            color: "#6db476",
            margin: -3,
            fontSize: 13,
            textAlign: "right"
          }}>by Rosie </h6>
        </h1>
      </div>
      <div style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "40px"
      }}>
        <PhotoBooth />
      </div>
    </div>
  );
}

export default App;
