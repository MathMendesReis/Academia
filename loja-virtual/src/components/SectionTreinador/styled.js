import styled from "styled-components";


export const BoxContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: auto;
border: 2px solid white;
  @media(max-width: 612px) {
    /* ajustar para telas menores que 768px de largura */
    };
`

export const TreinadorImg = styled.img`
height: auto;
width: 70%;
`