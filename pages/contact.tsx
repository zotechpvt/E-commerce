import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Colors } from "../src/components/theme/theme";

function Contact() {
  const [comment, setComment] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const inputCommentHandler = (e: any) => {
    const { value, name } = e.target;
    setComment((oldvalue) => ({ ...oldvalue, [name]: value }));
  };
  const sendMessageHandler = () => {
    console.log(comment);
  };
  return (
    <Box className="contact">
      <Box className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1143380763056!2d72.76382171453514!3d21.147847585933967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d52f109ff77%3A0x4e31edf2a8b2318b!2sPrime%20shoppers!5e0!3m2!1sen!2sin!4v1673246110767!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>
      <Box className="contactDetails">
        <Grid container spacing={{ md: 3, lg: 1 }}>
          <Grid item xs={12} sm={6} md={6} className="gridItem">
            <Typography variant="h4">Contacts Us</Typography>
            <Typography
              variant="subtitle1"
              mt={2}
              color={Colors.dim_grey}
              width={"90%"}
            >
              Contrary to popular belief, Lorem Ipsum is simply random text. It
              has roots in a piece of classical Latin literature from 45 BC,
              maki years old.
            </Typography>
            <Paper elevation={3} className="DetailsItems">
              <LocationOnIcon className="DetailsItemsIcon" />
              <Box className="DetailsItemsDetail">
                <Typography variant="subtitle1" color={Colors.dim_grey}>
                  Address:
                </Typography>
                <Typography variant="subtitle1">
                  60-49 Road 11378 New York
                </Typography>
              </Box>
            </Paper>
            <Paper elevation={3} className="DetailsItems">
              <LocationOnIcon className="DetailsItemsIcon" />
              <Box className="DetailsItemsDetail">
                <Typography variant="subtitle1" color={Colors.dim_grey}>
                  Phone:
                </Typography>
                <Typography variant="subtitle1">+65 11.188.888</Typography>
              </Box>
            </Paper>
            <Paper elevation={3} className="DetailsItems">
              <LocationOnIcon className="DetailsItemsIcon" />
              <Box className="DetailsItemsDetail">
                <Typography variant="subtitle1" color={Colors.dim_grey}>
                  Email:
                </Typography>
                <Typography variant="subtitle1">
                  hellocolorlib@gmail.com
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="gridItem">
            <Typography variant="h4">Leave A Comment</Typography>
            <Typography variant="subtitle1" mt={2} color={Colors.dim_grey}>
              Our staff will call back later and answer your questions.
            </Typography>
            <Box
              display={"flex"}
              sx={{
                width: "90%",
                marginTop: "20px",
                justifyContent: "space-around",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Your Name"
                onChange={inputCommentHandler}
                variant="outlined"
                name="name"
                value={comment.name}
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                onChange={inputCommentHandler}
                variant="outlined"
                name="email"
                value={comment.email}
              />
            </Box>
            <Box className="TextArea">
              <TextField
                id="outlined-multiline-flexible"
                label="Your Message"
                multiline
                rows={4}
                onChange={inputCommentHandler}
                name="message"
                value={comment.message}
              />
            </Box>
            <Button
              className="messageBtn"
              variant="contained"
              onClick={sendMessageHandler}
              sx={{ backgroundColor: Colors.info }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;
