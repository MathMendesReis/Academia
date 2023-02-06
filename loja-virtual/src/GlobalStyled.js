import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    color: #FFFFFF;
    border-color: #FFFFFF;
    line-height:18px;

};

button{
    color: #FFFFFF;
    background-color: #E2181A;
    border:none;
    cursor: pointer;
    border-radius: 4px;
}
div{ 
    /* border: 2px solid white; */
    background-color: transparent;
}

section{
}

img{
width:56px;
height:70.39px;
background-color: transparent;

}
h1{
    display: flex;
    align-items: center;
    line-height: 40px;
}
p{
    background-color: transparent;

}
`