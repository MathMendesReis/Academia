import styled from 'styled-components';

export const Container = styled.div`
    min-height: 40vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 651px) {
            /* width: 100%; */
    justify-content: center;

        }
    >div:first-child{
        max-width:33rem;
        max-height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 467px) {
            /* width: 100%; */
        }
        >h1:first-child{
            font-size: clamp(4rem, 8vw, 13rem);
            color: rgba(255, 255, 255, 0.10);
            font-weight: 700;
            line-height: 10%;
            letter-spacing: 4rem;
            text-transform: uppercase;
            text-align: center;
            margin-left:3.7rem;
            @media (max-width:331px) {
            width: 100%;
            margin:0;
           letter-spacing: 0; 
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