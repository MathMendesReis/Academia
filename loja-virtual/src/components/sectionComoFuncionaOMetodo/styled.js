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