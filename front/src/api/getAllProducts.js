import axios from 'axios'
import { useContext } from 'react'
import { baseURL } from '../constants/baseURL'
import { GlobalContext } from '../context/GlobalStateContext'

 const GetAllProducts = () => {
    const { states, setters } = useContext(GlobalContext)
    axios.get(`${baseURL}/products/${states.page}`)
        .then((res => {
            setters.setProductList(res.data.result)
            console.log(states.productList)
        }))
        .catch((err) => {
            alert(`Não foi possível processar sua solicitação: ${err.response}`)
        })
}
export default GetAllProducts