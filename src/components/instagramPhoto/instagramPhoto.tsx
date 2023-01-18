import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import { ImagesData } from "./instagramPhotoData";
import InstagramIcon from "@mui/icons-material/Instagram";
function InstagramPhoto() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [show, setShow] = useState<Boolean>(false);
  const [itemIndex, setItemIndex] = useState<number>(0);

  return (
    <Box className="instagramPhoto">
      <Grid container spacing={{ md: 3, lg: 1 }}>
        {ImagesData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            key={index}
          >
            <Box
              className="imagesContain"
              onMouseEnter={() => {
                setShow(true);
                setItemIndex(index);
              }}
              onMouseLeave={() => setShow(false)}
              onClick={() => {
                setShow(!show);
                setItemIndex(index);
              }}
            >
              <Image
                src={item.img}
                width={matches ? 350 : 250}
                height={300}
                alt="images"
              />
              {show && itemIndex === index && (
                <Box className="bannerItem">
                  <Box className="bannerText">
                    <InstagramIcon />
                    <Typography variant="subtitle1" mt={1}>
                      Colorlib_collaction
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default InstagramPhoto;
