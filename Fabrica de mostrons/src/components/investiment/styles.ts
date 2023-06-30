import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 30rem;
        max-height: 30rem;
        padding: 3rem;
        

        img{
            width: 10rem;
            height: auto;
        }
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
        p{
            width: 20rem;

        }
   
}
   
   
`;