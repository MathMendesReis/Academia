import React from "react";
import { BoxComents, BoxNameANdProf, ImgLogo, Name, Profissao } from "./styled";
import VectorComents from "../../imgs/VectorComents.png";

export const CardsComents = ({ img, name, profissao }) => {
  return (
    <BoxComents>
      <BoxNameANdProf>
        <img src={img} alt="" />
        <div>
          <Name>{name}</Name>
          <Profissao>{profissao}</Profissao>
        </div>
      </BoxNameANdProf>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius earum a
        perferendis tempore molestiae. Distinctio, iusto nesciunt nobis harum
        nulla dolorum modi libero, minus perspiciatis asperiores earum, a rem
        nihil.
      </p>
      <ImgLogo src={VectorComents} alt="" />
    </BoxComents>
  );
};
