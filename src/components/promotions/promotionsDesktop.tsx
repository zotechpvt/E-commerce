import { Button, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import classes from "../../../styles/Home.module.css";
import { itemData } from "./promotionData";

const PromotionsDesktop = () => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState<Boolean>(true);
  const [itemIndex, setItemIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
    const intervalId = setInterval(() => {
      setItemIndex((i) => (i + 1) % itemData.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Box className="promotionsDesktop">
      <Box className="promotionLeftRightIcon">
        <ChevronLeftIcon
          fontSize="large"
          onClick={() => setItemIndex((i) => (i + 1) % itemData.length)}
        />
        <ChevronRightIcon
          fontSize="large"
          onClick={() => setItemIndex((i) => (i + 1) % itemData.length)}
        />
      </Box>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box className="promotionsSlider">
          {show && (
            <Fade bottom big>
              <Box className="promotionsText">
                <Typography variant="h2" mt={2}>
                  {itemData[itemIndex].title}
                </Typography>
                <Typography variant="subtitle1" mt={2}>
                  {itemData[itemIndex].sub1}
                </Typography>
                <Button variant="contained" className="promotionsBtn">
                  Shop now
                </Button>
              </Box>
            </Fade>
          )}
          {show && (
            <Box className="promotionsOffer">
              <Box>
                <Image
                  className={classes.animation}
                  src={"/50off2.png"}
                  alt="img1"
                  width={150}
                  height={150}
                />
              </Box>
              {/* <Rotate bottom left cascade>
                                <Image src={'/50off2.png'} alt='img1' width={150} height={150} />
                            </Rotate> */}
            </Box>
          )}

          <Box className="promotionsImgContainer">
            <img
              src={itemData[itemIndex].img}
              alt="img1"
              style={{ width: "95%", height: "80vh" }}
            />
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default PromotionsDesktop;
