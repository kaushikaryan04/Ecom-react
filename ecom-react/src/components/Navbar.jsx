import React from "react";
import AppBar from "@mui/material/AppBar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Container  } from "@mui/system";
import { Typography, Toolbar , Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {


  const sx = {
    appbar: {
      height: "50px",
    },
    bag: {
      display: { xs: "none", md: "flex" },
      mr: 2,
      mb: 0.7,
      fontSize: 35,
    },
    typoLink:{
      mr: 1,
      ml:1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              textDecoration: "none",
    },
    navName:{
      ml:70,
              display: { xs: "none", md: "flex"},
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              textDecoration: "none",

    }
  }
  return (
    <>
    <AppBar positon="static" sx={sx.appbar} >
      <Container maxWidth="xxl">
        <Toolbar className = "width-toolbar" disableGutters>
          <ShoppingBagIcon sx={sx.bag} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to ="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            E-Shop
          </Typography>
          <Typography variant="h6" noWrap component="div" sx = {sx.typoLink}>
              <Button component = {Link} to = "/cart" variant = "contained">Show Cart</Button>
          </Typography>
           <Typography variant="h6" noWrap component="div" sx = {sx.typoLink}>
          <Button component = {Link} to = "/addproduct" variant = "contained">Add a product</Button>
          </Typography>
          <Typography variants = "h6" noWrap component ="div" sx ={sx.navName}>
            Welcome To Our Shop
          </Typography>
        </Toolbar>
      </Container>
          </AppBar>
          <Toolbar />
    </>
  )
}