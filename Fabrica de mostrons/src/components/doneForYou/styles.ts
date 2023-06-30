import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:4rem;
margin-top: 1rem;
border-top: 1px solid ${({theme})=>theme.colors.red};
border-bottom: 1px solid ${({theme})=>theme.colors.red};
padding-top:3rem ;
padding-bottom:3rem ;
>div{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width:531px) {
            width: 100%;
        }
        img{
            height: auto;
            width: 5rem;
        }
        p{
            width: 15rem;
            text-align: center;
        }
    }
}
`;
