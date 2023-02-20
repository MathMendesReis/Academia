import styled from "styled-components";

export const BoxSegAndInvestimento = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: auto;
width: 100%;
gap: 15px;
 @media  (max-width:746px){
    flex-direction: column;
    }
`

export const ImgSeguranca = styled.img`
height: auto;
width: 203px;

`


export const BoxFaqAndQuestions = styled(BoxSegAndInvestimento)`
height: 500px;
`

export const BoxFaq = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    justify-content: center;
`

export const TxtFaq = styled.h1`
color: rgba(255, 255, 255, 0.1);
position: relative;
    width: 100%;
    text-align: center;
    font-size: 13vw;
    text-transform: uppercase;
    bottom: -1.5vw;

    @media (min-width: 768px) {
        font-size: 6.5rem;
    }
`

export const TxtPerguntasFrequentes = styled.p`
    position: relative;
    width: 80%;
    max-width: 600px;
    text-align: center;
    padding: 20px;
    font-size: 2.5vw;
    text-transform: uppercase;
    margin: 0 auto;
    bottom: 5vw;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;


