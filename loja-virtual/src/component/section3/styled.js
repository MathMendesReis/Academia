import styled from "styled-components";

export const Container = styled.div`
    height: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

export const ContainerCards = styled.div`
    display: flex;
    gap: 20px;
    height: 450px;
    width: 90%;
    justify-content: space-around;
    align-items: center;
`

export const Card = styled.div`
height: 400px;
width: 310px;
`

export const ImgCard = styled.img`
height: 90%;
width: 100%;
`

export const ButtonSaibaMais = styled.button`
width: 100%;
height: 10%;
text-align: left;
padding-left: 5px;
`

export const ComecarAgora = styled.button`
height: 50px;
width: 400px;
`

export const Text = styled.h1`
position: relative;
z-index: 2;
bottom: 130px;
background-color: transparent;
left: 50px;
font-size: 25px;
text-align: center;
`

export const BoxComents = styled.div`
    width:307px;
    height:315px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const ContainerComents = styled.div`
 display: flex;
 gap: 25px;
 `
export const NameAndProfission = styled.div`
 display: flex;
 width: 100%;
 justify-content: flex-start;
 align-items: center;
 `