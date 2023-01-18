import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { blogData } from "./blogData";
import { Colors } from "../theme/theme";

function Blog() {
  return (
    <Box className="blogContainer">
      <Box>
        <Typography variant="h4" className="blogTitle" color={Colors.dark}>
          From The Blog
        </Typography>
      </Box>

      <Box
        className="blogDetails"
        // sx={{ flexDirection: matches ? 'column' : 'row' }}
      >
        <Grid container spacing={{ md: 3, lg: 1 }}>
          {blogData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              key={index}
            >
              <Box className="blog">
                <Image
                  src={item.img}
                  width={350}
                  height={350}
                  alt="blogimage"
                />
                <Box className="blogIcon">
                  <CalendarTodayIcon className="icon" />
                  <Typography
                    variant="subtitle1"
                    ml={1}
                    mr={3}
                    color={Colors.primary}
                  >
                    {item.date}
                  </Typography>
                  <ChatBubbleOutlineIcon className="icon" />
                  <Typography variant="subtitle2" ml={1} color={Colors.primary}>
                    {item.chat}
                  </Typography>
                </Box>
                <Box className="blogText">
                  <Typography variant="h5" color={Colors.dark}>
                    {item.blogTitle}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={Colors.dim_grey}
                    mt={2}
                  >
                    {item.blogPera}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Blog;
