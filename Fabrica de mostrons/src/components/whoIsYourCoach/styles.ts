import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   border-top: 1px solid ${({theme})=>theme.colors.red};
   border-bottom: 1px solid ${({theme})=>theme.colors.red};
   justify-content: space-around;
   align-items: center;
   gap:2rem;
   >div:first-child{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5rem;
    gap:2rem;
    /* flex:1; */
    @media (max-width:591px) {
    padding: 1rem;
    align-items: center;
    flex:0;
    width: 100%;
    }

    >div{
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    @media (max-width:591px) {
    padding: 1rem;
    align-items: center;
    flex:0;
    width: 100%;
    }
    }
    >p{
        max-width: 33.3125rem;
        font-weight: 500;


    }
    >h1{
        max-width: 33.3125rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2.8rem;
    }
   }
   img{
    height: auto;
    max-width:30rem;
    @media (max-width:439px) {
        width: 100%;
    }
   }
`;