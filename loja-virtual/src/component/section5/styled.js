import styled from "styled-components"

export const BoxContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    gap: 80px;
    @media (max-width:415px) {
        position: relative;
        top: 1700px;
        left: 0;
        width: 60%;
        display: flex;
        flex-direction: column;
    }
`

export const Box1 = styled.div`
    height: 459px;
    width: 530px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    @media (max-width:415px) {
        width: 80%;
        position: relative;
        left: 80px;
        top:50px
    }
`

export const ButtonComecarAgora = styled.button`
    width: 250px;
    margin-top: 15px;
    margin-left: 20px;
`

export const Box2 = styled(Box1)`
@media (max-width:415px) {
    position: relative;
    left: 50px;
    }

`

export const ImgGarant = styled.img`
height: 200px;
width: 200px;
@media (max-width:415px) {
    position: relative;
    left: 50px;
    }
`

export const TxtInvest = styled.h1`
text-transform: capitalize;
@media (max-width:415px) {
    
}
`