import PageSelector from "../../components/pageSelector/pageSelector";
import Products from "../../components/products/products";
import { HomeContainer } from "./style";

export default function HomePage() {
    return (
        <HomeContainer>
            <Products />
            <PageSelector />
        </HomeContainer>
    )
}