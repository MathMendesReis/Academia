import React from "react";
import {
  Box1,
  Box2,
  BoxContainer,
  ButtonComecarAgora,
  ImgGarant,
  TxtInvest,
} from "./styled";
import ImgGarantia from "../../img/imgGarantia.png";

const Section5 = () => {
  return (
    <BoxContainer>
      <Box1>
        <TxtInvest>investimento</TxtInvest>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lacus consequat auctor lacus
          amet volutpat sed. Ipsum nibh aliquam integer faucibus purus. Orci eu
          malesuada morbi et interdum nunc lorem a adipiscing.
        </p>
        <p>Por apenas R$1.940,00</p>
        <h1>Ou 12x de R$175,80 </h1>
        <ButtonComecarAgora>começar agora</ButtonComecarAgora>
      </Box1>
      <Box2>
        <ImgGarant src={ImgGarantia} alt="" />
        <p>
          Se em 7 dias você perceber que esse método não é para você, é só
          solicitar seu dinheiro de volta que a devolução será realizada de
          maneira simples e rápida, não precisa de justificativa.
        </p>
      </Box2>
    </BoxContainer>
  );
};
export default Section5;
