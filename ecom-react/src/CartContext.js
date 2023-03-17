import {createContext , useState} from "react";
import { productData , getProductById } from "./productsData"; 

export const cartContext = createContext({
    items :[],
    addOneToCart:() =>{},
    getProductQuantity : () =>{},
    removeOneFromCart:() =>{},
    deleteFromCart : () => {},
    getTotalCost : () => {}
})

export function CartProvider({children} ){
    const [cartProducts ,setCartProducts] = useState([])

    const getProductQuantity = (id) =>{
        const quan =  cartProducts.find(product => product.id === id)?.quantity ;
        if(quan === undefined){
            return 0
        }
        return quan;
    }
    const addOneToCart = (id) =>{
        const quantity = getProductQuantity(id)
        if(quantity === 0){
            setCartProducts(
                [
                ...cartProducts ,
                {id : id,
                    quantity :1
                }
            ]
            )
        }else{
                setCartProducts(
                    cartProducts.map(product =>
                            product.id === id ? {...product , quantity : product.quantity + 1} : product
                    )
                )
        }

    }
    const removeOneFromCart =(id) =>{
        const quantity = getProductQuantity(id)
        if(quantity === 1){
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map(product =>
                        product.id === id ? {...product , quantity : product.quantity - 1} : product
                )
            )
        }
    }
    const getTotalCost = () =>{
        let totalCost = 0;
        cartProducts.map((product) => {
            const pd = getProductById(product.id)
            totalCost+=(pd.price * product.quantity)
    })
        return totalCost
    }
    const deleteFromCart = (id) =>{
        const quantity = getProductQuantity(id)
        if(quantity === 0) return false
        setCartProducts(
            cartProducts => cartProducts.filter(product => {
                return product.id !== id
            })
        )
    }
    const contextValue = {
        items : cartProducts,
        addOneToCart,
        getProductQuantity  ,
        removeOneFromCart,
        deleteFromCart  ,
        getTotalCost 
    }
    return (
        <cartContext.Provider value = {contextValue}>
            {children}

        </cartContext.Provider>
    )
}                                                                   

export default CartProvider