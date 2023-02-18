import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
*{
    background-color: #1E1E1E;
    font-family: Montserrat;
    color: #FFFFFF;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal
}

img{
    height: 50px;
    width: 50px;
    background-color: transparent;

;
}

button{
    cursor: pointer;
    background: #B01316;
    width: 20rem;
    height: 3rem;
    border: none;
    font-size: 1.5vw;
    text-transform: uppercase;
}
div{
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
h1{
    font-size: 2vw;
    background-color: transparent;


}
p{
    font-size: 1.2vw;
    background-color: transparent;


}

span{
    color: #E2181A;
    background-color: transparent;

}
`