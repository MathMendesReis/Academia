import styled from "styled-components";

export const BoxNameANdProf = styled.div`
display: flex;
background-color: transparent;
justify-content: flex-start;
width: 100%;
gap: 15px;
align-items: center;
@media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`

export const Name = styled.h1`
background-color: #1E1E1E;
`

export const Profissao = styled.h2`
background-color: #1E1E1E;
align-self: center;

`
export const BoxComents = styled.div`
width: 250px;
height: 370px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 6px;
border-bottom: 3px solid red;
background-color: #1E1E1E;
@media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

`

export const ImgLogo = styled.img`
align-self: flex-end;
padding: 3px;
`

export const BoxNameProf = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #1E1E1E;
width: 100%;
`