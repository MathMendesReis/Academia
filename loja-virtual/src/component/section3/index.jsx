import React from "react";
import {
  BoxComents,
  ButtonSaibaMais,
  Card,
  ComecarAgora,
  Container,
  ContainerCards,
  ContainerComents,
  ImgCard,
  NameAndProfission,
  Text,
} from "./styled";
import photoCard1 from "../../img/strong-bodybuilder-posing-and-showing-muscles.png";
import photoCard2 from "../../img/strong-bodybuilder-posing-and-showing-muscles2.png";
import photoCard3 from "../../img/strong-man-with-perfect-abs-shoulders-biceps-triceps-and-chest-bodybuilder-topless-flexing-his-muscles-over-black-wall3.png";
import photoCard4 from "../../img/strong-bodybuilder-posing-and-showing-muscles4.png";

export const Section3 = () => {
  return (
    <Container>
      <h1>como funciona o metodo 5x</h1>
      <ContainerCards>
        <Card>
          <ImgCard src={photoCard1} alt="" />
          <ButtonSaibaMais>saiba mais</ButtonSaibaMais>
          <Text>
            transformando a <br />
            alimentação
          </Text>
        </Card>
        <Card>
          <ImgCard src={photoCard2} alt="" />
          <ButtonSaibaMais>saiba mais</ButtonSaibaMais>
          <Text>
            cronograma dos <br />
            treinos
          </Text>
        </Card>
        <Card>
          <ImgCard src={photoCard3} alt="" />
          <ButtonSaibaMais>saiba mais</ButtonSaibaMais>
          <Text>
            a importância do <br />
            descanso{" "}
          </Text>
        </Card>
        <Card>
          <ImgCard src={photoCard4} alt="" />
          <ButtonSaibaMais>saiba mais</ButtonSaibaMais>
          <Text>
            transformando a <br />
            alimentação
          </Text>
        </Card>
      </ContainerCards>
      <ComecarAgora>quero começar agora</ComecarAgora>
      <h1>o que estão falando do nosso metodo de treinamento</h1>
      <ContainerComents>
        <BoxComents>
          <NameAndProfission>
            <img src="" alt="" />
            <h3>Leonardo</h3>
            <h4>Fisiocuturista</h4>
          </NameAndProfission>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequatur cum eos! Magni id dicta unde consequuntur quam
            voluptatem deserunt quidem eos blanditiis doloribus eaque, iusto
            rerum aperiam, non cumque.
          </h4>
        </BoxComents>
        <BoxComents>
          <NameAndProfission>
            <img src="" alt="" />
            <h3>Leonardo</h3>
            <h4>Fisiocuturista</h4>
          </NameAndProfission>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequatur cum eos! Magni id dicta unde consequuntur quam
            voluptatem deserunt quidem eos blanditiis doloribus eaque, iusto
            rerum aperiam, non cumque.
          </h4>
        </BoxComents>
        <BoxComents>
          <NameAndProfission>
            <img src="" alt="" />
            <h3>Leonardo</h3>
            <h4>Fisiocuturista</h4>
          </NameAndProfission>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consequatur cum eos! Magni id dicta unde consequuntur quam
            voluptatem deserunt quidem eos blanditiis doloribus eaque, iusto
            rerum aperiam, non cumque.
          </h4>
        </BoxComents>
      </ContainerComents>
    </Container>
  );
};
