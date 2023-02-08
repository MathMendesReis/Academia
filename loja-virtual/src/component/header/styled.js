import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 717px;
  width: 100%;
  padding: 10px;
  @media (max-width:900px) {
  }
`;
export const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 10px;
width: 40%;
height: 300px;
@media (max-width:900px) {
  height: 150px;
  padding: 25px;
  }
  @media (max-width: 658px) {
    position: relative;
    top: -60px;
    left: 90px;
  }

`
export const TextP = styled.p`
  width: 310px;
`;

export const ComecarAgora = styled.button`
  width: 230px;
  height: 30px;
`

export const BgImagem = styled.img`
  height:auto;
  width: 600px;
  position: relative;
  top: -50px;
  right: 18px;
  @media (max-width:900px) {
    width: 400px;
    top: 50px;
    right: -200px;
    @media (max-width: 658px) {
    width: 250px;
    top: 100px;
  }
  }

`

export const Img = styled.img`
  width: 400px;
  height: auto;
  position: relative;
  top: -565px;
  right: 15px;
  background-color: transparent;
   @media (max-width:900px) {
    width: 300px;
    top: -320px;
    right: -200px;
  }
  @media (max-width: 658px) {
    width: 200px;
    top: -100px;
  }
`
export const ContainerImagens = styled.div`
width: 580px;
height: 300px;
`