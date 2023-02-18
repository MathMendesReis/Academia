import React from "react";
import { ButtonSaibaMais, CardContainer, ImgBg, TxtCard } from "./styled";

const CardModulo = ({ img, txt }) => {
  return (
    <CardContainer>
      <ImgBg src={img} alt="" />
      <TxtCard>{txt}</TxtCard>
      <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
    </CardContainer>
  );
};

export default CardModulo;
