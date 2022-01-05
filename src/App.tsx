import React from "react";
import { Navbar } from "./components/Navbar";
import DefaultDrawer from "./components/DefaultDrawer";
import TasksList from "./components/TasksList";
import TaskForm from "./components/TasksList/TaskForm";
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
      <div style={{ flexGrow: 1, maxHeight: 'calc(100vh - 45px)',display:'flex' }}>
          {<DefaultDrawer />}
          {<TasksList />}
        {/* <div style={{ display: "flex", height: "100%" }}> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
