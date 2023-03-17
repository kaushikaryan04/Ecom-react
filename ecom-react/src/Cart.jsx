import React from 'react'
import { Typography , Paper , Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext } from 'react'
import {cartContext} from "./CartContext.js"
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import { getProductById } from './productsData';
export default function Cart() {
  const cart = useContext(cartContext)
  const allItems = cart.items
  console.log(allItems)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#1A2027',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  }));
  let totalPrice = 0
  const handleDelete = (id) =>{
    cart.deleteFromCart(id)
  }
  return (
    <>
    <Typography sx ={{textAlign : "center"}} variant = "h2" color = "secondary"> <ShoppingCartIcon fontSize = "large"/> Cart </Typography>

    <Stack alignItems="center" spacing = {2}>
      {allItems.map((item) =>{
        totalPrice = totalPrice + getProductById(item.id).price * item.quantity
        return (
          <Item sx = {{width:"400px"}}>
          <Typography variant = "h3" color = "primary">{getProductById(item.id).name}</Typography>
          <Typography variant = "h5" color = "primary">Quantity {item.quantity}</Typography>  
          <Typography variant = "h5" color = "primary">Price {getProductById(item.id).price * item.quantity}</Typography>  
          <Button onClick = {() => handleDelete(item.id)} variant = "contained">Remove Item</Button>
        </Item>
        )
      })}
    </Stack>
    <Typography textAlign = "center" variant = "h3" color = "primary">Total Price {totalPrice}</Typography>
    </>
  )
}
