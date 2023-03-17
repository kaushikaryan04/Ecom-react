import Navbar from "./components/Navbar";
import ProductPage from "./ProductPage.jsx";
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Cart from "./Cart.jsx"
import CartProvider from "./CartContext";
import AddProduct from "./AddProduct";
function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path = "/" element = {<ProductPage />}/>
    <Route path = "/cart" element = {<Cart/>}/>
    <Route path = "/addproduct" element = {<AddProduct/>} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
