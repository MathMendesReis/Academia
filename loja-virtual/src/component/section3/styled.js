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
    width: 70rem;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1136px) {
        width: 60rem;
    }
    @media (max-width:980px) {
    width: 50rem;
    margin-left: 155px;
    }
    @media (max-width:658px) {
    width: 40rem;
    }
    @media (max-width:503px) {
        width: 30rem;
    }
    @media (max-width:340px) {
        flex-direction: column;
        position: relative;
        top: 850px;
        left: 110px;
    }
`

export const Card = styled.div`
height: 400px;
width: 310px;
@media (max-width:1136px) {
        height: 350px;
        width: 280px;
    }
@media (max-width:980px) {
        height: 300px;
        width: 200px;
    }
@media (max-width: 503px) {
    flex-wrap: wrap;
}
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
@media (max-width: 900px) {
    margin-left: 150px;
}
@media (max-width: 331px) {
    position: relative;
    top: 900px;
    left: 115px;
}
`

export const Text = styled.h1`
position: relative;
z-index: 2;
bottom: 130px;
background-color: transparent;
left: 50px;
font-size: 25px;
text-align: center;
@media (max-width:1136px) {
    left: 15px;
    }
@media (max-width:980px) {
       font-size: 20px;
    }
@media (max-width:658px) {
    font-size: 15px;
    }
@media (max-width: 331px) {
    left: 25px;
}
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
 @media (max-width: 331px) {
    position: relative;
    top: 1350px;
    left: 155px;
    flex-direction: column;
}
 `
export const NameAndProfission = styled.div`
 display: flex;
 width: 100%;
 justify-content: flex-start;
 align-items: center;
 `

export const MedotoTxt = styled.h1`
 @media (max-width:900px) {
       margin-left: 150px;
        font-size: 1.6rem;
 }
 @media (max-width: 331px) {
    position: relative;
    left: 120px;
    top: 370px;
    width: 100%;
}
 `

export const TextMetodos = styled.h1`
 @media (max-width: 331px) {
    position: relative;
    left: 160px;
    top: 1300px;
    width: 100%;
}
 `