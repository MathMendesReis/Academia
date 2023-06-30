import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    
    h1{
        margin-bottom: 3rem;
        span{
            color: ${({theme})=>theme.colors.red};
        }
    }

    >div{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        width: 80%;
        align-items: center;
        justify-content: center;
        >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 310px;
        height: 400px;
        @media (max-width: 313px) {
            width:100%;
            height:auto;
        }
        h2{
            position: relative;
            top: -7.5rem;
            font-size: 1.2rem;
            text-transform: uppercase;
        }
        h2:nth-child(2){
            width: 100%;
            text-align: center;
            position: relative;
            top:-8rem;
            font-weight: 700;
        }
        h2:nth-child(3){
            background-color: ${({theme})=>theme.colors.red};
            display: flex;
            padding: 0.3rem 2.5rem;
            align-items: flex-start;
            gap: 10px;
            border-radius: 20px;
        }
        button{
            background-color: ${({theme})=>theme.colors.red};
            width:100%;
            border:none;
            color:${({theme})=>theme.colors.white};
            position: relative;
            top:-6.2rem;
            text-transform: uppercase;
            font-weight: 700;
            padding: 1rem;
        }
        }
    }

    .button-footer{
        background-color: ${({theme})=>theme.colors.red};
        color:${({theme})=>theme.colors.white};
        width: 25rem;
        height: 3rem;
        border:none;
        margin-top:6rem;
        font-weight: 700;
        text-transform: uppercase;
        border-radius:4px;
    }
`;
