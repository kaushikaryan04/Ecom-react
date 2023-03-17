import { Typography ,TextField  ,Button , Stack} from '@mui/material'
import React ,{useState } from 'react'
import {productData} from "./productsData.js"
import { useNavigate } from 'react-router-dom'
export default function AddProduct() {
    const navigate = useNavigate()
    const style = {
         width:"400px"
    }

    const handleChange = (e) =>{
        setData({
            ...data,
                [e.target.id] : e.target.value
            })
    }

    const handleClick = (e) =>{
            setData(
            {    ...data,
                id : [productData.length]
            }
            )
            productData.push(data)
            navigate("/")
    }

    const [data , setData] = useState({
        id:0,
        name:"",
        category : "",
        description:"",
        price : 0
    })
  return (
    <>
    <Typography color = "primary" textAlign="center" variant = "h2"> Add a Product to shop</Typography>
    <form >
    <Stack sx = {{marginTop : "50px"}} alignItems="center" spacing = {2} >
    <TextField id = "name"  onChange = {(e) => handleChange(e)}  sx = {style} placeholder = "Enter Product Name" />
    <TextField id = "category" onChange ={(e) => handleChange(e)} sx = {style} placeholder = "Enter Product Category" />
    <TextField id = "description" onChange={(e) => handleChange(e)} sx = {style} placeholder = "Enter some description about proudct"/>
    <TextField id = "price" onChange = {(e) => handleChange(e)} sx = {style} placeholder = "Enter price of the Product"/>
    <Button variant = "contained" onClick = {(e) => handleClick(e)} >Add Product to Shop</Button>
    </Stack>
    </form>

    <Typography sx ={{marginTop : "20px"}} textAlign = "center" variant = "body1"> No need to add image we will automatically asign an image based on the name given to the product So give a specific name </Typography>
    </>
  )
}
