import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header/header';
import GlobalStyle from '../GlobalStyle';
import CartPage from '../pages/cart/cart';
import ErrorPage from '../pages/error/error';
import HomePage from '../pages/home/home';

export function Router() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>
                <Route exact path={'/carrinho'}>
                    <CartPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}