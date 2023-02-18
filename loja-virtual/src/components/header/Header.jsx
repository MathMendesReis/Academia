import React from "react";
import {
  Bg,
  BgTwo,
  BoxHeader,
  BoxImgs,
  BoxLgAndImg,
  BoxTexts,
  ButtonComecaAgr,
  LogoImg,
  TxtFacaParte,
  TxtTransformeCorpo,
} from "./styled";
import logo from "../../imgs/logo.png";
import backViewHeader from "../../imgs/backViewHeader.png";
import backViewHeaderTwo from "../../imgs/backViewHeaderTwo.png";
const Header = () => {
  return (
    <BoxHeader>
      <BoxTexts>
        <BoxLgAndImg>
          <LogoImg src={logo} alt="logo" />
          <h1>
            <span>FÁBRICA</span> <p>DE MONSTROS</p>
          </h1>
        </BoxLgAndImg>
        <TxtTransformeCorpo>
          Transforme o seu corpo <span> 5x</span> mais <span>rápido</span>
        </TxtTransformeCorpo>
        <TxtFacaParte>
          Faça parte do método mais utilizado por atletas de alto nível. Venha
          transformar seu corpo e reconquistar a sua autoestima
        </TxtFacaParte>
        <ButtonComecaAgr>começar agora</ButtonComecaAgr>
      </BoxTexts>
      <BoxImgs>
        <Bg src={backViewHeader} alt="" />
        <BgTwo src={backViewHeaderTwo} alt="" />
      </BoxImgs>
    </BoxHeader>
  );
};

export default Header;
