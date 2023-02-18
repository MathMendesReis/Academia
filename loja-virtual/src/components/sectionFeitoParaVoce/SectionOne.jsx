import React from "react";
import { BoxCards, BoxSection, Txt } from "./styled";
import iniciante from "../../imgs/iniciante.png";
import praticante from "../../imgs/praticante.png";
import atleta from "../../imgs/atleta.png";
import { CardSectionOne } from "../cardSectionOne";

const SectionOne = () => {
  const imgsAndTxt = [
    { img: iniciante, txt: "Iniciante na busca do corpo perfeito" },
    { img: praticante, txt: "Iniciante na busca do corpo perfeito" },
    { img: atleta, txt: "Iniciante na busca do corpo perfeito" },
  ];

  return (
    <BoxSection>
      <Txt>feito para você</Txt>
      <BoxCards>
        {imgsAndTxt.map((item, key) => (
          <CardSectionOne key={key} img={item.img} txt={item.txt} />
        ))}
      </BoxCards>
    </BoxSection>
  );
};

export default SectionOne;
