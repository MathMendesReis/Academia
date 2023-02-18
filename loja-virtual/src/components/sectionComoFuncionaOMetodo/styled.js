import styled from "styled-components";
import { BoxCards } from "../sectionFeitoParaVoce/styled";

export const BoxContainer = styled.section`
/* width: 15vw; */
height: 70vh;
padding: 10%;

`

export const BoxCards2 = styled(BoxCards)`
    gap:5%;
    padding: 5%;
    @media (max-width:613px) {
    display: flex;
    flex-direction: column;
}
`


export const ButtonComeçarAgr = styled.button`
    width:30vw;
    height: 50px;
    margin-left:32%;
`

export const TxtComoFuncionaOMetodo = styled.h1`
    margin-left:35%;
    width:30vw;

`

export const TxtOqueEstaoFalandoDOMetodo = styled.h1`
display: block;
width: 100%;
text-align: center;
margin: 15px;
`