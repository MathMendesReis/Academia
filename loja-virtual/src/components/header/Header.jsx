import React from "react";
import {
  BoxHeader,
  BoxImgs,
  BoxLgAndImg,
  BoxTexts,
  TxtFacaParte,
  TxtTransformeCorpo,
} from "./styled";
import logo from "../../imgs/logo.png";
const Header = () => {
  return (
    <BoxHeader>
      <BoxTexts>
        <BoxLgAndImg>
          <img src={logo} alt="logo" />
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
        <button>começar agora</button>
      </BoxTexts>
      <BoxImgs></BoxImgs>
    </BoxHeader>
  );
};

export default Header;
