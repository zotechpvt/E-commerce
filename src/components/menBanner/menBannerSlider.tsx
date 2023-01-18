import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { itemData } from "./menBannerData";
import { Colors } from "../theme/theme";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartReducer";

interface props {
  filterData: {
    img: string;
    category: string;
    title: string;
    price: string;
  };
}

const MenBannerSlider: React.FC<props> = ({ filterData }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesForSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [showOptions, setShowOptions] = useState<Boolean>(false);
  const [itemIndex, setItemIndex] = useState<number>(0);
  let settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    autoplay: boolean;
    autoplaySpeed: number;
    slidesToShow: number;
    slidesToScroll: number;
    initialSlide: number;
  } = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: matchesForSM ? 1 : matches ? 3 : 2,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const dispatch = useDispatch();
  const AddtoCartHandler = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <Slider {...settings}>
      {filterData.map((item, index) => (
        <Box
          className="slider"
          key={index}
          sx={{
            padding: matchesForSM ? "0px 10px" : matches ? "0px" : "0px 10px",
          }}
          onMouseEnter={() => {
            setShowOptions(true);
            setItemIndex(index);
          }}
          onMouseLeave={() => setShowOptions(false)}
        >
          <Box
            className="sliderImage"
            sx={{ width: matchesForSM ? "100%" : matches ? "90%" : "100%" }}
          >
            {showOptions && itemIndex === index && (
              <FavoriteBorderIcon className="animationFavrite" />
            )}
            <Image
              src={item.img}
              alt="img1"
              width={230}
              height={250}
              className="image"
              onClick={() => {
                setShowOptions(!showOptions);
                setItemIndex(index);
              }}
            />

            {showOptions && itemIndex === index && (
              <Box className="animation">
                <Box className="cart">
                  <ShoppingBagIcon onClick={() => AddtoCartHandler(item)} />
                </Box>
                <Box className="view">
                  {/* <AddIcon /> */}
                  <Typography variant="subtitle1">+ Quick View</Typography>
                </Box>
                <Box className="random">
                  <ShuffleIcon />
                </Box>
              </Box>
            )}
          </Box>
          <Typography
            variant="subtitle1"
            color={Colors.dim_grey}
            mt={2}
            sx={{ textTransform: "capitalize" }}
          >
            {item.category}
          </Typography>
          <Typography
            variant="h5"
            color={Colors.black}
            sx={{ textTransform: "capitalize" }}
          >
            {item.title}
          </Typography>
          <Typography variant="h5" color={Colors.info} mt={1}>
            ${item.price}
          </Typography>
        </Box>
      ))}
    </Slider>
  );
};

export default MenBannerSlider;
