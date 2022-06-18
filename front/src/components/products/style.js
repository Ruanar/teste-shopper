import styled from 'styled-components'

export const ProductContainer = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 50px;
gap: 50px;
`
export const ProductCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 125px;
padding: 25px;
font-family: 'Montserrat';
color: #1c1a38;
span{
    font-size: 12px;
    color: grey;
    align-self: center !important;
}
a{
    color: #2da77a;
    border: 2px solid transparent;
    padding: 5px;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    ion-icon{
            :hover{
                filter: drop-shadow( 0 0 0.3em #2da77a);
                color: white;
   
    }
        }
}
`
export const PriceAndCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const Details = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`