import './signIn.css';
import {Grid, createTheme, ThemeProvider} from "@mui/material";
import SignInForm from "../../components/SignInForm/signInForm";
import ClassIllustration from "../../components/ClassIllustration/classIllustration";

const SignIn = () => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center">
                <Grid className={"classroom-illustration"} item xs={7.5}>
                    <ClassIllustration />
                </Grid>
                <Grid className={"login-section"} item xs={4.5}>
                    <SignInForm />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default SignIn;
