import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Typography variant="h2" color="#e7ab3c" align="center">
        SignIn
      </Typography>

      <Container
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Card
          sx={{
            marginTop: "50px",
            justifyContent: "center",
            textAlign: "center",
            width: "70%",
            display: "flex",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px 15px #888888",
            // border: "3px solid #1c1c1c",
          }}
        >
          <CardContent>
            <form>
              <Grid container>
                <Grid item xs={12} sm={12} mt={2}>
                  <TextField
                    type="email"
                    name="Email"
                    label="Email"
                    placeholder="Enter Your Email"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} mt={2}>
                  <TextField
                    type="password"
                    name="Password"
                    label="Password"
                    placeholder="Enter Your Password"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} mt={2}>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#e7ab3c",
                      "&:hover": {
                        backgroundColor: "#e7ab3c",
                        color: "#fff",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} mt={2}>
                  <Link href="/SignUp">
                    <Typography
                      variant="body1"
                      align="center"
                      display="flex"
                      justifyContent="center"
                    >
                      Don't have an account?
                      <span style={{ marginLeft: "2px", color: "#e7ab3c" }}>
                        SignUp
                      </span>
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
