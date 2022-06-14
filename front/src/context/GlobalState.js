import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";
import { GlobalContext } from "./GlobalStateContext";

export default function GlobalState(props) {
    let [page, setPage] = useState(1)
    let [productList, setProductList] = useState([])

    const GetAllProducts = () => {
        axios.get(`${baseURL}/products?page=${page}`)
            .then((res => {
                setProductList(res.data.result)
                console.log(res.data.result)
                console.log(productList)
            }))
            .catch((err) => {
                alert(`Não foi possível processar sua solicitação: ${err.response}`)
            })
    }
    useEffect(() => {
        GetAllProducts()
    }, [page])

    const states = { page, productList }
    const setters = { setPage, setProductList }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

