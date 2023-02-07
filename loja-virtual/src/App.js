import React from "react";
import Footer from "./component/footer";
import { Header } from "./component/header";
import { SectionTwo } from "./component/section2";
import { Section3 } from "./component/section3";
import { Section4 } from "./component/section4";
import Section5 from "./component/section5";
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
        <Section4 />
        <Section5 />
        <Footer />
      </GlobalState>
    </div>
  );
}

export default App;
