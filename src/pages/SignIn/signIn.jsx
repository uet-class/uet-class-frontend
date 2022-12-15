import { Grid, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import SignInForm from "../../components/SignInForm/signInForm";
import Classroom from "../../assets/classroom.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

const SignIn = () => {
  const navigate = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  useEffect(() => {
    AuthService.isUserSignIn(navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: `url(${Classroom})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={4} elevation={6} square>
          <SignInForm />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
