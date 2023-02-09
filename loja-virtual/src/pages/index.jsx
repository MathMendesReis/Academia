import React from "react";
import { Header } from "../component/header/index";
import { SectionTwo } from "../component/section2/index";
import { Section3 } from "../component/section3/index";
import { Section4 } from "../component/section4/index";
import Section5 from "../component/section5/index";
import Footer from "../component/footer/index";
import { Container } from "./styled";
export const Page = () => {
  return (
    <Container>
      <Header />
      <SectionTwo />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Container>
  );
};
