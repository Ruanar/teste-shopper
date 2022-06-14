import Logo from '../../img/logo.png'
import { HeaderContainer } from './style'

export default function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt='Logotipo da Shopper' />
            <button>Carrinho</button>
        </HeaderContainer>
    )
}