import axios from "axios"
import { useContext } from "react"
import { baseURL } from "../../constants/baseURL"
import { GlobalContext } from "../../context/GlobalStateContext"
import { Details, PriceAndCart, ProductCard, ProductContainer } from "./style"

export default function Products() {
    const { states, setters } = useContext(GlobalContext)
    const products = states.productList.map((item) => {
        function addToCart(item) {
            const productInCart = states.cartItems.filter((prod) => {
                if (prod.prodName === item.name) {
                    return prod
                } else {
                    return false
                }
            })
            if (productInCart.length === 0) {
                const body = {
                    prodId: item.id,
                    prodName: item.name,
                    amount: 1,
                    prodPrice: item.price
                }
                axios.post(`${baseURL}/orderItem`, body)
                    .then((res) => {
                        setters.setWatcher(states.watcher + 1)
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }
        }
        return (
            <ProductCard key={item.id} >
                <h4>{item.name} </h4>
                <Details>
                    <PriceAndCart>
                        <p>R${item.price} </p>
                        <a onClick={() => addToCart(item)} key={item.id} ><ion-icon name="cart"></ion-icon></a>
                    </PriceAndCart>
                    <span>{item.qty_stock} disponíveis </span>
                </Details>
            </ProductCard>
        )
    })
    return (
        <ProductContainer>
            {products}
        </ProductContainer>
    )
}
