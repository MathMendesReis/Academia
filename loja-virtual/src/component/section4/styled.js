import styled from "styled-components"

export const BoxContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:415px) {
        flex-direction: column;
        position: relative;
        top: 1200px;
    }
`

export const BoxText = styled.div`
    height: 200px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (max-width:415px) {
        width: 80%;
    }
`
export const Img = styled.img`
    position: relative;
    height: 700px;
    width: auto;
    top:-145px;
    @media (max-width:415px) {
        position: relative;
        top: 200px;
        left: 0;
    }
`

export const TxtTitle = styled.h1`
position: relative;
top: -50px;
left: 50px;
@media (max-width:415px) {
    left: 0;
    }

`

export const Text = styled.p`
    position: relative;
    left: 50px;
    @media (max-width:415px) {
    left: 0;
    }
`

export const BoxInfo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
position: relative;
left: 50px;
top: 20px;
@media (max-width:415px) {
    top: 400px;
    left: 0;
    }


`