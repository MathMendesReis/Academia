import React from "react";
import { BoxContainer, BoxFaq, Faq, TextPerguntas } from "./styled";

const Footer = () => {
  return (
    <BoxContainer>
      <BoxFaq>
        <div>
          <Faq>FAQ</Faq>
          <TextPerguntas>perguntas frequentes:</TextPerguntas>
        </div>
        <ul>
          <p>Qual tempo de participação do método?</p>
          <p>Quais formas de pagamento?</p>
          <p>Nunca pratiquei exercícios físicos, posso participar?</p>
          <p>Estou acima do peso, consigo acompanhar os módulos??</p>
        </ul>
      </BoxFaq>
      <div>
        <p>
          Copyright © 2023. Todos os direitos reservados. Desenvolvido por
          Matheus Mendes.
        </p>
      </div>
    </BoxContainer>
  );
};

export default Footer;
