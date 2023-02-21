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
          <li>Qual tempo de participação do método?</li>
          <li>Quais formas de pagamento?</li>
          <li>Nunca pratiquei exercícios físicos, posso participar?</li>
          <li>Estou acima do peso, consigo acompanhar os módulos?</li>
        </ul>
      </BoxFaqAndQuestions>
    </div>
  );
};
