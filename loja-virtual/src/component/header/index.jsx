import React from "react";
import logo from "../../img/logoFabMonstros.png";
import imgbg from "../../img/back-view-of-a-muscular-man-with-tattoo-on-back-against-of-black-background-isolated 1.png";
import imgFront from "../../img/muscular-and-fit-young-bodybuilder-fitness-male-model-posing-over-black-background-copy-space 1.png";
import {
  Banner,
  BgImagem,
  ComecarAgora,
  ContainerImagens,
  HeaderContainer,
  Img,
  TextP,
} from "./styled";
export const Header = () => {
  return (
    <HeaderContainer>
      <Banner>
        <h1>
          <img src={logo} alt="" />
          fabrica de monstros
        </h1>
        <h1>Transforme o seu corpo 5x mais rápido</h1>
        <TextP>
          Faça parte do método mais utilizado por atletas de alto nível. Venha
          transformar seu corpo e reconquistar a sua autoestima
        </TextP>
        <ComecarAgora>começar agora</ComecarAgora>
      </Banner>
      <ContainerImagens>
        <BgImagem src={imgbg} alt="" />
        <Img src={imgFront} />
      </ContainerImagens>
    </HeaderContainer>
  );
};
