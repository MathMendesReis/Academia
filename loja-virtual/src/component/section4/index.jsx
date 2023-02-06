import React from "react";
import { BoxContainer, BoxInfo, BoxText, Img, Text, TxtTitle } from "./styled";
import Img1 from "../../img/hardy-man-doing-exercise-with-heavy-bar1.png";
export const Section4 = () => {
  return (
    <BoxContainer>
      <BoxText>
        <TxtTitle>quem e o seu treinador</TxtTitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur. In augue egestas ullamcorper
          nec viverra orci risus egestas. Lacus consequat auctor lacus amet
          volutpat sed. Pharetra suscipit in vitae ante etiam in. Convallis
          blandit dolor in nisl malesuada venenatis dignissim mauris. Nisl mi
          vehicula cursus nisi sit nulla donec adipiscing. Ipsum nibh aliquam
          integer faucibus purus. Orci eu malesuada morbi et interdum nunc lorem
          a adipiscing. Nisl suscipit maecenas risus amet at convallis
          massa.Lorem ipsum dolor sit amet consectetur. In augue egestas
          ullamcorper nec viverra orci risus egestas. Lacus consequat auctor
          lacus amet volutpat sed. Pharetra suscipit in vitae ante etiam in.
          Convallis blandit dolor in nisl malesuada venenatis dignissim mauris.
        </Text>
        <BoxInfo>
          <h4>
            +200 <br />
            vidas <br />
            transformadas
          </h4>
          <h4>
            +14 <br />
            atletas <br />
            profissionais
          </h4>
          <h4>
            +8 <br />
            filias <br />
            construidas
          </h4>
        </BoxInfo>
      </BoxText>
      <BoxText>
        <Img src={Img1} alt="" />
      </BoxText>
    </BoxContainer>
  );
};
