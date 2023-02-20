import React from "react";
import CardInvestimento from "../cardInvestimento";
import seguranca from "../../imgs/seguranca.png";
import {
  BoxFaq,
  BoxFaqAndQuestions,
  BoxSegAndInvestimento,
  ImgSeguranca,
  TxtFaq,
  TxtPerguntasFrequentes,
} from "./styled";

export const SectionFaq = () => {
  return (
    <div>
      <BoxSegAndInvestimento>
        <CardInvestimento />
        <ImgSeguranca src={seguranca} alt="segurança" />
      </BoxSegAndInvestimento>
      <BoxFaqAndQuestions>
        <BoxFaq>
          <TxtFaq>FAQ</TxtFaq>
          <TxtPerguntasFrequentes>Perguntas frequentes</TxtPerguntasFrequentes>
        </BoxFaq>
        <ul>
          <li>???</li>
          <li>???</li>
          <li>???</li>
          <li>???</li>
        </ul>
      </BoxFaqAndQuestions>
    </div>
  );
};
