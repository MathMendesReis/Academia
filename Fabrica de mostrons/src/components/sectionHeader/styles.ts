import styled from 'styled-components';


interface propsStyles{
    bg:string
}

export const Container = styled.div<propsStyles>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15%;
    button{
        max-width: 20rem;
        height: 3rem;
        border: none;
        background-color: ${({theme})=>theme.colors.red};
        color: ${({theme})=>theme.colors.white};
        font-weight: 700;
        font-family: sans-serif;
        padding-right:1rem ;
        padding-left: 1rem;
    }
    
    div:first-child{
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media (max-width:707px) {
            align-items: center;
            justify-content: baseline;
            text-align: center;
        }
        >h1{
            font-size: 2.5rem;
            span{
                color: ${({theme})=>theme.colors.red};
            }
        }
        div:nth-child(1){
            display: flex;
            flex-direction: row;
            @media (max-width:691px) {
            flex-direction: column;
        }
        }
        div:nth-child(2){
            display: flex;
            flex-direction: column;
            align-items: center;

            >h1{
                font-size: 2.2rem;
                color: ${({theme})=>theme.colors.red};
            }
        }
    }
    div:last-child{
        img{
        padding-top: 2rem;
        max-height: 50rem;
        width: auto;
        @media (max-width: 691px) {
            height: auto;
            width: 90%;
        }
       
    }
    }

`;