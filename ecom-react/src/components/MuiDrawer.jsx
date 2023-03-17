import React from 'react'
import {Box ,Typography, Drawer , Divider} from '@mui/material'
export default function MuiDrawer({draw , setDraw}) {
  return (
    <>
    <Drawer anchor = "left" open = {draw} onClose = {() => setDraw(false)} >
    <Box
    p ={2}
    heigth="100%"
    width = "250px"
    textAlign = "center"
    role = "presentation"
    >
    <Typography variant = "h4">
      About
    </Typography>
      <Divider  />
    <Typography variant = "p">
      This is made using material UI and state is handled using context API 
      Images are added using Unsplash API when a new product is added using add proudct page the api automatically 
      takes asigns the image as per the name provided.
    </Typography>
    <Divider/>
    <Typography sx = {{marginTop : "40px"}} varaint = "h5">
      Mady by Aryan Kaushik
    </Typography>
    </Box>
    </Drawer>
    </>
  )
}
