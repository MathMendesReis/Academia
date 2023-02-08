import styled from "styled-components";

export const Container = styled.div`
    height: 391px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: #0C0B0B;
    width: 100%;
    @media (max-width:900px) {
        width: 60rem;
  }
  @media (max-width: 658px) {
    width: 45rem;
    padding: 1rem;
  }
    
`;

export const SectionIniciante = styled.div`
height: 350px;
width: 350px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #0C0B0B;

`

export const ImgPraticante = styled.img`
width: 20px;
height: ${(props) => props.heigt}px;
`