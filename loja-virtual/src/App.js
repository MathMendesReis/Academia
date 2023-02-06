import React from "react";
import { Header } from "./component/header";
import { SectionTwo } from "./component/section2";
import { Section3 } from "./component/section3";
import { GlobalState } from "./globalStates/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalState>
        <Header />
        <SectionTwo />
        <Section3 />
      </GlobalState>
    </div>
  );
}

export default App;
