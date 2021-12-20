import React from "react";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <div style={{ height: "45px" }}>
        <Navbar />
      </div>
      <div style={{ flexGrow: 1, border: "10px solid black" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              minWidth: "300px",
              border: "10px solid black",
              height: "100%",
            }}
          >
            {/* <DefaultDrawer /> */}
          </div>
          <div
            style={{ flexGrow: 1, border: "10px solid black", height: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
