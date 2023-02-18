import React from "react";
import { BoxCards2, BoxContainer } from "./styled";
import bgModulo1 from "../../imgs/bgModulo1.png";
import CardModulo from "../cardModulos";

const SectionComoFuncionaOMetodo = () => {
  const imgsAndTxts = [
    { img: bgModulo1, txt: "transformando a alimentação" },
    { img: bgModulo1, txt: "transformando a alimentação" },
    { img: bgModulo1, txt: "transformando a alimentação" },
    { img: bgModulo1, txt: "transformando a alimentação" },
  ];
  return (
    <BoxContainer>
      <h1>Como funciona o método 5x</h1>
      <BoxCards2>
        {imgsAndTxts.map((item) => (
          <CardModulo img={item.img} txt={item.txt} />
        ))}
      </BoxCards2>
    </BoxContainer>
  );
};

export default SectionComoFuncionaOMetodo;
