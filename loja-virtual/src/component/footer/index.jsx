import React from "react";
import {
  BoxContainer,
  BoxFaq,
  Copyrigth,
  Faq,
  ListQuest,
  Questions,
  TextPerguntas,
} from "./styled";

const Footer = () => {
  return (
    <BoxContainer>
      <BoxFaq>
        <div>
          <Faq>FAQ</Faq>
          <TextPerguntas>perguntas frequentes:</TextPerguntas>
        </div>
        <ListQuest>
          <Questions>Qual tempo de participação do método?</Questions>
          <Questions>Quais formas de pagamento?</Questions>
          <Questions>
            Nunca pratiquei exercícios físicos, posso participar?
          </Questions>
          <Questions>
            Estou acima do peso, consigo acompanhar os módulos??
          </Questions>
        </ListQuest>
      </BoxFaq>
      <Copyrigth>
        <p>
          Copyright © 2023. Todos os direitos reservados. Desenvolvido por
          Matheus Mendes.
        </p>
      </Copyrigth>
    </BoxContainer>
  );
};

export default Footer;
