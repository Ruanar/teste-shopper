import app from "./app";
import getAllProducts from "./endpoints/getAllProducts";

app.get('/products', getAllProducts)