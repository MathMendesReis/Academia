import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    >div:first-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 30rem;
        max-height: 30rem;
        padding: 3rem;
        >div:first-child{
            border: 1px solid red;
            justify-content: space-between;
            button{
                border: none;
                background-color: ${({theme})=>theme.colors.red};
                color: ${({theme})=>theme.colors.white};
                padding: 1rem 2rem;
            }
        }
    }
    >div:last-child{
        max-width: 30rem;
        max-height: 30rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            max-width: 15rem;
            height: auto;
        }
        p{
            width: 20rem;

        }
   
}
   
   
`;