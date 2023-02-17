import styled from "styled-components";

export const BoxContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    gap: 200px;
  
`;

export const BoxFaq = styled.div`
    display:flex;
    width:800px;
    justify-content: space-between;

`


export const Faq = styled.h1`
color: rgba(255, 255, 255, 0.1);
width: 100%;
font-size: 15vw;
position: relative;
left: -150px;
`

export const TextPerguntas = styled.h1`
position: relative;
background-color: transparent;
top: -25px;
left: -100px;
text-transform: capitalize;
`


export const ListQuest = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;

`


export const Questions = styled.li`
    border-bottom: 2px solid red;

`

export const Copyrigth = styled.div`
background-color: #E2181A;
width: 100%;
height: 35px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
bottom: -70.9px;
`