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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});
  const submitDataHandler = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        const user = response.user;
        updateProfile(user, {
          displayName: data.name,
        });
        console.log("data is sent to Firebase", response);
        console.log(data);
        toast.success(signupSuccess, signupSuccessToast);
      })
      .catch((error) => {
        console.log(error);
        // alert(error);
      });
    // }
    console.log(data);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Typography variant="h2" color="#e7ab3c" align="center">
        SignUp
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
            <form onSubmit={handleSubmit(submitDataHandler)}>
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Name"
                    name="Name"
                    placeholder="Enter Your  Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
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
                  <Link href="/SignIn">
                    <Typography
                      variant="body1"
                      align="center"
                      display="flex"
                      justifyContent="center"
                    >
                      Alredy have an account?
                      <span style={{ marginLeft: "2px", color: "#e7ab3c" }}>
                        SignIn
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

export default SignUp;
