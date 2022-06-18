import styled from "styled-components"

export const CartContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 50px;
font-family: 'Montserrat';
table{
padding: 10px;
td, th{
    padding: 5px;
    ion-icon{
        font-size: 20px;
        color: #b31414;
    }
    input{
        width: 50px;
        margin-left: 20px;
    }
}
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
div{
    display: flex;
    flex-direction: row;
    margin: 5px;
}
`
export const FinishButton = styled.button`
    background-color: #2da77a;
    border-radius: 10px;
    line-height: 18px;
    color: white;
    width: 169px;
    justify-content: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    padding: 12px;
    border: solid 2px transparent;
`