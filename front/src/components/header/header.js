import { useHistory } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Logo from '../../img/logo.png'
import { goToCart, goToHome } from '../../routes/cordinator'
import { HeaderContainer } from './style'

export default function Header() {
    let history = useHistory()
    let location = useLocation()

    return (
        <HeaderContainer>
            <img src={Logo} alt='Logotipo da Shopper' />
            {location.pathname === '/' ?
                <button onClick={() => goToCart(history)} >Carrinho</button> :
                <button onClick={() => goToHome(history)}> Voltar</button>
            }
        </HeaderContainer>
    )
}