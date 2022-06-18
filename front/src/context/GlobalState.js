import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props) {
    let [page, setPage] = useState(1)
    let [productList, setProductList] = useState([])
    let [orders, setOrders] = useState([])
    let [totalPrice, setTotalPrice] = useState(0)
    let [cartItems, setCartItems] = useState([])
    let [watcher, setWatcher] = useState(0)
    let [totalOrderPrice, setTotalOrderPrice] = useState(0)

    const GetAllProducts = () => {
        axios.get(`${baseURL}/products?page=${page}`)
            .then((res => {
                setProductList(res.data.result)
            }))
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }
    const GetCartItems = () => {
        axios.get(`${baseURL}/cart`)
            .then((res) => {
                setCartItems(res.data.result)
                setTotalOrderPrice(res.data.total)
            })
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }
    useEffect(() => {
        GetAllProducts()
        GetCartItems()
    }, [watcher])

    const states = { page, productList, orders, totalPrice, cartItems, watcher, totalOrderPrice }
    const setters = { setPage, setProductList, setOrders, setTotalPrice, setCartItems, setWatcher }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
