import React from "react";
import {
  BoxCards2,
  BoxContainer,
  ButtonComeçarAgr,
  TxtComoFuncionaOMetodo,
  TxtOqueEstaoFalandoDOMetodo,
} from "./styled";
import bgModulo1 from "../../imgs/bgModulo1.png";
import coments1 from "../../imgs/coments1.png";
import coments2 from "../../imgs/coments2.png";
import coments3 from "../../imgs/coments3.png";
import CardModulo from "../cardModulos";
import { CardsComents } from "../cardsComentarios";

const SectionComoFuncionaOMetodo = () => {
  const imgsAndTxts = [
    { img: bgModulo1, txt: "transformando a alimentação" },
    { img: bgModulo1, txt: "transformando a alimentação" },
    { img: bgModulo1, txt: "transformando a alimentação" },
    { img: bgModulo1, txt: "transformando a alimentação" },
  ];

  const coments = [
    { img: coments1, name: "Leonardo", profissao: "Fisiculturista" },
    { img: coments2, name: "Geovana", profissao: "Atleta" },
    { img: coments3, name: "joão", profissao: "jornalista" },
  ];
  return (
    <BoxContainer>
      <TxtComoFuncionaOMetodo>Como funciona o método 5x</TxtComoFuncionaOMetodo>
      <BoxCards2>
        {imgsAndTxts.map((item) => (
          <CardModulo img={item.img} txt={item.txt} />
        ))}
      </BoxCards2>
      <ButtonComeçarAgr>começar agora</ButtonComeçarAgr>
      <TxtOqueEstaoFalandoDOMetodo>
        o que estão falando do nosso método de treinamento
      </TxtOqueEstaoFalandoDOMetodo>
      <BoxCards2>
        {coments.map((item) => (
          <CardsComents
            img={item.img}
            name={item.name}
            profissao={item.profissao}
          />
        ))}
      </BoxCards2>
    </BoxContainer>
  );
};

export default SectionComoFuncionaOMetodo;
