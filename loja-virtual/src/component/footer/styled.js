import styled from "styled-components";

export const BoxContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    gap: 200px;
     @media (max-width:415px) {
        position: relative;
        top: 2000px;
        display: flex;
        flex-direction: column;
        width: 120px;
    }
`;

export const BoxFaq = styled.div`
    display:flex;
    width:800px;
    justify-content: space-between;
    @media (max-width:340px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
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
/* position: absolute; */
margin-top: 105px;
display: flex;
align-items: center;
justify-content: center;
`