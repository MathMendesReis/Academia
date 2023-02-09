import React from "react";
import { GlobalState } from "./globalStates/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { Page } from "./pages";
function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalState>
        <Page />

      </GlobalState>
    </div>
  );
}

export default App;
