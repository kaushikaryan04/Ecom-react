import React , {useState , useEffect , useContext} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography , CardActions , Button } from '@mui/material';
import {cartContext} from "../CartContext.js"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const accessKey = "YOUR API KEY"


export default function Product({name , description, price ,id}) {
  const styles = {
    card:{
      maxWidth:400,
      backgroudColor:"lightBlue"
    }
  }
  const cart =  useContext(cartContext)
  const productQuantity = cart.getProductQuantity(id)
  const handleAddToCart = () =>{
      cart.addOneToCart(id)
  }
  const handleAdd = () =>{
    cart.addOneToCart(id)
  } 
  const handleDelete = () =>{
    cart.removeOneFromCart(id)
  }

  const [result , setResult] = useState('./test.png')
  const getPhoto = (keyword) =>{
    const controller = new AbortController();
    const signal = controller.signal
  const url =`https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${keyword}&page=1`
    fetch(url , {signal})
      .then(res =>{
        // console.log("response is" ,res)
        return res.json()
      })
      .then(data => {
        setResult(data.results[0].urls.regular)
      })
      .catch((err) =>{
        console.log(err)
       return  controller.abort();
      })
  }
  useEffect(() =>{
    getPhoto(name)
  } )
  return (
    <>
  <Card sx = {styles.card}>
    <CardMedia
    sx={{ height: 140 }}
    image={result}
    title="Test image"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {name}
        </Typography>
      <Typography variant="body2" color="text.secondary" >
    {description}
      </Typography>
    </CardContent>
    <CardActions>
      {productQuantity > 0 ?
    <>
        <Button onClick ={() => handleDelete()} size = "small" variant = "contained">-</Button>
      <Typography sx={{marginLeft: "5px" , marginRight:"0px"}} fontSize="large">
        {productQuantity}
      </Typography>
        <Button  onClick = {() => handleAdd()} size = "small" variant = "contained">+</Button>
      </>

      :
      <Button onClick ={() =>{handleAddToCart()}} startIcon = {<AddShoppingCartIcon/>} sx ={{marginRight :"2px"}}  size="small">Add to Card</Button>
      
      }
        <Typography variant = "body1" color = "secondary">Price {price} </Typography>
      </CardActions>
  </Card>
  </>
  )
}
