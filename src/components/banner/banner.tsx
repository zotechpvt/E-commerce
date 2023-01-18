import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function banner() {
  return (
    <Box className="bannerContainer">
      <Grid container spacing={{ xs: 2, md: 3, lg: 1 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
        >
          <Box
            className="banner"
            sx={{ backgroundImage: `url(${"/menBanner.jpg"})` }}
          >
            <Box className="bannerItem">
              <Typography className="bannerText">Men's</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
        >
          <Box
            className="banner"
            sx={{ backgroundImage: `url(${"/womenBanner.jpg"})` }}
          >
            <Box className="bannerItem">
              <Typography className="bannerText">women's</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
        >
          <Box
            className="banner"
            sx={{ backgroundImage: `url(${"/kidBanner.jpg"})` }}
          >
            <Box className="bannerItem">
              <Typography className="bannerText">kid's</Typography>
            </Box>
            {/* <Image src={'/kidBanner.jpg'} alt='kidimage' width={280} height={280} /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default banner;
