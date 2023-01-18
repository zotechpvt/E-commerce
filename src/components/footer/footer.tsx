import { Box, Button, Grid, Input, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PartnersLogo from "../partnersLogo/partnersLogo";
import Link from "next/link";

function Footer() {
  let year: number = new Date().getFullYear();
  return (
    <>
      <PartnersLogo />
      <Box className="footerContainer">
        <Box className="footer">
          <Grid container spacing={{ md: 3, lg: 1 }}>
            <Grid item xs={12} sm={6} md={3} className="gridItem">
              <Typography variant="h4" mt={5}>
                COLOSHOP
              </Typography>
              <Typography variant="subtitle1">
                Address: 60-49 Road 11378 New
              </Typography>
              <Typography variant="subtitle1">York</Typography>
              <Typography variant="subtitle1">Phone: +65 11.188.888</Typography>
              <Typography variant="subtitle1">
                Email: hello.colorlib@gmail.com
              </Typography>
              <Box className="icons">
                <FacebookIcon className="icon" fontSize="large" />
                <InstagramIcon className="icon" fontSize="large" />
                <TwitterIcon className="icon" fontSize="large" />
                <PinterestIcon className="icon" fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="gridItem">
              <Typography variant="h5" mt={5}>
                Information
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                About Us
              </Typography>
              <Link href="/checkout">
                <Typography variant="subtitle1">Checkout</Typography>
              </Link>
              <Link href="/contact">
                <Typography variant="subtitle1">Contact</Typography>
              </Link>
              <Typography variant="subtitle1">Serivius</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="gridItem">
              <Typography variant="h5" mt={5}>
                My Account
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                My Account
              </Typography>
              <Typography variant="subtitle1">
                <Link href="/contact">Contact</Link>
              </Typography>
              <Typography variant="subtitle1">
                <Link href="/shoppingcart">Shopping Cart</Link>
              </Typography>
              <Typography variant="subtitle1">Shop</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="gridItem">
              <Typography variant="h5" mt={5}>
                Join Our Newsletter Now
              </Typography>
              <Typography variant="subtitle1" mt={2}>
                Get E-mail updates about our latest shop and special offers.
              </Typography>
              <Box className="subscribe">
                <Input
                  type="email"
                  placeholder="Enter Your Mail"
                  className="subscribeMail"
                />
                <Button className="subscribeBtn">subscribe</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="subtitle1" className="footerCopyright">
          Copyright ©{year} All rights reserved | This template is made with by
          Colorlib
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
