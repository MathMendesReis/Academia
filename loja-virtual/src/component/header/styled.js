import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 717px;
  @media (max-width: 1120px) {
    flex-direction: column;
    height: 900px;
  }
  
 
`;
export const Banner = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 10px;
width: 400px;
height: 300px;
@media (max-width:415px) {
  align-items: center;
  height: 350px;
  }
  @media (max-width:778px) {
    width: 100%;
  }

`
export const TextP = styled.p`
  /* width: 310px; */
`;

export const ComecarAgora = styled.button`
  width: 230px;
  height: 30px;
`

export const BgImagem = styled.img`
  height:auto;
  width: 90%;
  position: relative;
  top: -120px;
  left: 35px;
  /* @media (max-width:415px) {
    position: absolute;
    top: 550px;
    left: 20px;
  } */
  @media (max-width:778px) {
    position: absolute;
    top: 600px;
    left: 40px;
  }
`

export const Img = styled.img`
  width: 65%;
  height: auto;
  position: relative;
  top: -605px;
  left: 15px;
  background-color: transparent;
  /* @media (max-width:415px) {
    position: absolute;
    top: 580px;
    left: 50px;
  } */
  @media (max-width:778px) {
    position: absolute;
    top: 600px;
    left: 40px;
  }

`
export const ContainerImagens = styled.div`
width: 580px;
height: 300px;
@media (max-width:735px) {
  width: 100%;
}
`


export const ContainerSecundario = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  height: 80%;
  align-items: center;
  @media (max-width: 1120px) {
    flex-direction: column;
    height: 100%;
  }
  
`