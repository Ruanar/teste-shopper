import styled from 'styled-components'

export const Selector = styled.div`
display: flex;
flex-direction: row;
margin: 24px auto;
`

export const OtherPage = styled.button`
min-width: 42px;
padding: 8px;
height: 40px;
color: #2da77a;
font-family: '"Montserrat"';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
@media screen and (max-device-width : 480px){
    padding: 6px;
}
`

export const ThisPage = styled.button`
width: 42px;
height: 40px;
padding: 8px;
background-color: #2da77a;
color: #fff;
font-family: '"Montserrat"';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
`