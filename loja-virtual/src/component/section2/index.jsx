import React from "react";
import { Container, ImgPraticante, SectionIniciante } from "./styled";

import Iniciante from "../../img/Iniciante.png";
import Atleta from "../../img/atleta.png";
import prat1 from "../../img/prati1.png";
import prat2 from "../../img/prat2.png";
import prat3 from "../../img/prat3.png";
export const SectionTwo = () => {
  return (
    <Container>
      <SectionIniciante>
        <img src={Iniciante} alt="" />
        <p>Iniciante na busca do corpo perfeito</p>
      </SectionIniciante>
      <SectionIniciante>
        <div>
          <ImgPraticante heigt="37" src={prat1} alt="" />
          <ImgPraticante heigt="50" src={prat2} alt="" />
          <ImgPraticante heigt="80" src={prat3} alt="" />
        </div>
        <p>Praticante que não conseguem mais evoluir</p>
      </SectionIniciante>
      <SectionIniciante>
        <img src={Atleta} alt="" />
        <p>Atleta em evolução e em competições fisiculturistas</p>
      </SectionIniciante>
    </Container>
  );
};
