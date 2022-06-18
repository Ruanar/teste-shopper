import axios from "axios"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { baseURL } from "../../constants/baseURL"
import { GlobalContext } from "../../context/GlobalStateContext"
import { CartContainer, FinishButton, FormContainer } from "./style"

export default function CartPage() {
    const history = useHistory()
    const { states, setters } = useContext(GlobalContext)
    const today = new Date()
    const total = states.totalOrderPrice && states.totalOrderPrice.toFixed(2)

    const cartList = states.cartItems.map((item) => {
        let actualprod = {}
        let inStock = 0
        axios.get(`${baseURL}/products/${item.prodId}`)
            .then((res) => {
                actualprod = res.data[0]
                inStock = actualprod.qty_stock
            })
            .catch((err) => {
                console.log(err.message)
            })

        let showPrice = (item.prodPrice * item.amount).toFixed(2)
        const removeFromCart = () => {
            axios.delete(`${baseURL}/orderItem/${item.id}`)
                .then((res) => {
                    console.log("produto removido do carrinho")
                    setters.setWatcher(states.watcher + 1)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
        const update = () => {

            let newAmount = Number(prompt(`Quantas unidades você precisa?`))
            if (newAmount > actualprod.qty_stock) {
                window.alert(`A quantidade solicitada está insisponível. Por favor, selecione um valor menor do que ${actualprod.qty_stock} `)
            }
            else {
                let newTotalPrice = Number((item.prodPrice * newAmount).toFixed(2))
                let body = {
                    'amount': newAmount,
                    'totalPrice': newTotalPrice

                }
                axios.put(`${baseURL}/orderItem/${item.id}`, body)
                    .then((res) => {
                        setters.setWatcher(states.watcher + 1)
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            }

        }

        return (
            <tr key={item.id}>
                <td>{item.prodName} </td>
                <td>{item.amount} </td>
                <td>{`R$${item.prodPrice}`} </td>
                <td>{`R$${showPrice}`} </td>
                <td><a onClick={() => removeFromCart(item)}>
                    <ion-icon name="trash"></ion-icon>
                </a></td>
                <td><button key={item.id} onClick={() => update()}>Atualizar</button></td>
            </tr>
        )
    })
    const finishOrder = () => {
        states.cartItems.map((ordItem) => {
            function toEnd() {
                axios.put(`${baseURL}/order/${ordItem.id}`)
                let body = {
                    "orderAmount": ordItem.amount
                }
                axios.put(`${baseURL}/products/${ordItem.prodId}`, body)
                setters.setWatcher(states.watcher + 1)
            }


            toEnd()
        })

    }
    return (
        <CartContainer>
            {states.cartItems.length > 0 ?
                <>
                    <section>
                        <table>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Quantidade</th>
                                <th>Valor Unitário</th>
                                <th>Valor Total</th>
                            </tr>
                            {cartList}
                        </table>
                        <p>Valor total: R${total}</p>
                    </section>

                    <FormContainer>
                        <h3>Antes de confirmar seu pedido, precisamos de algumas informações</h3>
                        <form>
                            <div>
                                <p>Nome completo:</p>
                                <input
                                    placeholder="Nome completo"
                                />
                            </div>
                            <div>
                                <p>Data de entrega:</p>
                                <input
                                    type='date'
                                    min={today}
                                />
                            </div>
                        </form>
                    </FormContainer>
                    <FinishButton onClick={() => finishOrder()}>Finalizar Pedido</FinishButton>
                </>
                :
                <div>
                    <p>Seu carrinho está vazio! <br />
                        Volte e escolha os produtos, e nós entregamos para você rapidinho
                    </p>
                </div>
            }
        </CartContainer>
    )
}