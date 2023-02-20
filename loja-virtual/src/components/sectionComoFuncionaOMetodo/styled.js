import styled from "styled-components";
import { BoxCards } from "../sectionFeitoParaVoce/styled";

export const BoxContainer = styled.section`
/* width: 15vw; */
height: auto;
width: 100%;
  @media (max-width:752px) {
}
`

export const BoxCards2 = styled(BoxCards)`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  padding: 5rem ;
  @media (max-width:752px) {
    flex-direction: column;;
    height: auto;

}
`


export const ButtonComeçarAgr = styled.button`
    width:30vw;
    height: 50px;
    margin-left:32%;
`

export const TxtComoFuncionaOMetodo = styled.h1`
    width:100%;
    display: block;
    text-align: center;
`

export const TxtOqueEstaoFalandoDOMetodo = styled.h1`
display: block;
width: 99%;
text-align: center;
margin: 15px;
`