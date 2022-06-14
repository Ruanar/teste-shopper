import styled from "styled-components";

export const HeaderContainer = styled.header`
    border-top: 6px solid #2da77a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding: 17px 40px;
    img{
        width: 156px;
    }
    button{
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
    }
`