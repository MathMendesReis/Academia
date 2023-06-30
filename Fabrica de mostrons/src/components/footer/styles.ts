import styled from 'styled-components';

export const Container = styled.div`
    min-height: 40vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    >div:first-child{
        max-width:33rem;
        max-height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        >h1:first-child{
            flex:1;
            font-size: 13rem;
            color: rgba(255, 255, 255, 0.10);
            font-weight: 700;
            line-height: 10%;
            letter-spacing: 4rem;
            text-align: center;
            margin-left:3.7rem;
            @media (max-width:759px) {
                flex: 0;
                width:100%;
                margin:0;
                font-size: 7rem;
                position:relative;
                right: -9rem ;
            }
        }
        >h1:last-child{
            display: inline;
            position: relative;
            right:27rem;
            z-index: 999;
            flex:1;
            @media (max-width:759px) {
                margin:0;
                font-size: 2rem;
                position:relative;
                right: 11rem ;
            }
        }
    }
    div:last-child{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        min-width: 15rem;
    }

    .question{
        color: #FFF;
        font-size: 1rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .grouped{

        display: inline-flex;
        padding-bottom: 0px;
        align-items: center;
        gap: 20px;
        border-bottom: 1px solid var(--secundria, #B01316);
    }
`;