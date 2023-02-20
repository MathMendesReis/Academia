import styled from "styled-components";

export const CardContainer = styled.div`
height: 350px;
width: 350px;
display: flex;
flex-direction: column;
justify-content: flex-end;
  @media (max-width:752px) {
    margin-bottom: 150px;
  
}
`

export const ImgBg = styled.img`
height: 100%;
width: 100%;
`

export const ButtonSaibaMais = styled.button`
width: 100%;
height: 25px;
text-align: left;
padding: 2%;
/* z-index: 2; */
font-size: 15px;
position: relative;
bottom: 45px;

`

export const TxtCard = styled.h3`
/* position: relative; */
bottom: 35%;
width: 100%;
background-color: transparent;
text-align: center;
position: relative;
bottom: 50px;
`