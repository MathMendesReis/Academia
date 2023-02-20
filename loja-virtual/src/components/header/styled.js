import styled from "styled-components";

export const BoxHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const BoxTexts = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding: 10% 5% 7.5% 10%;
  gap: 3vw;
  @media(max-width: 768px) {
    /* ajustar para telas menores que 768px de largura */
    display: flex;
    width: 100%;
    height: auto;
    justify-content: flex - start;
    flex-direction: column;
    align-items: flex - start;
    padding: 20% 5% 10% 10%;
    gap: 3vw;
    };
    
`;

export const BoxImgs = styled.div`
  width: 100%;
  height: auto;
`;

export const TxtTransformeCorpo = styled.h1`
  width: 70%;
  padding: 5px;
`;

export const TxtFacaParte = styled.p`
  width: 70%;
  padding: 5px;
`;

export const BoxLgAndImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Bg = styled.img`
  height: auto;
  width: 50%;
  position: absolute;
  right: 25px;
  top: 70px;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 81.25%, #000000 100%); */
  @media (max-width: 768px) {
    height: auto;
    width: 60%;
    position: absolute;
    right: 5px;
    top: 75px;
    background-color: transparent
  }
`;

export const BgTwo = styled.img`
  height: auto;
  width: 33%;
   position: absolute;
    right: 155px;
    top: 55px;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 81.25%, #000000 100%); */
  @media (max-width: 768px) {
    height: auto;
    width: 40%;
    position: absolute;
    right: 25px;
    top: 75px;
    background-color: transparent
  }
`;

export const ButtonComecaAgr = styled.button`
  width: 20vw;
  @media (max-width: 768px) {
    width: 30vw;
    height: 15px;
  }
`;


export const LogoImg = styled.img`
 width: 35%;
 height: auto;
`
