import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePage from "./component/pages/RoutePages";
import TestFrame from "./component/frames/TestFrame"

function App() {
  return (
    <div>
      {/**<Connect />
        <TalismanChosen /> */}
      <BrowserRouter>
        <RoutePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
