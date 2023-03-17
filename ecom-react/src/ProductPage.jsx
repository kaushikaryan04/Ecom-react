import MuiDrawer from "./components/MuiDrawer.jsx"
import Product from "./components/Product.jsx"

import React , {useState} from 'react'
import { Grid , Container, Button} from "@mui/material"

import {productData} from "./productsData.js"

export default function ProductPage() {
  const [showDraw , setShowDraw] = useState(false)
  const handleClick = () =>{
    setShowDraw(true)
  }
  return (
    <Container
    sx={{
      margin:"0",
      marginLeft:"150px"
    }}
    >
      <Button onClick = {() => handleClick()} variant = "contained" sx = {{marginBottom: "10px"}} color = "secondary">
        About website
      </Button>
        <MuiDrawer draw = {showDraw} setDraw = {setShowDraw}/>
  <Grid container spacing = {2}>
    {productData.map((product ) => { 
      return(
      <Grid key = {product.id} item xs = {4}>

        <Product id = {product.id} name = {product.name } description = {product.description} price = {product.price }/>
        </Grid>
    )
    })}
  </Grid>
  </Container>
  )
}
