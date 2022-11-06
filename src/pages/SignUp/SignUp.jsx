import {createTheme, Grid, ThemeProvider} from "@mui/material";
import ClassIllustration from "../../components/ClassIllustration/ClassIllustration";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUp = () => {
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
                    <SignUpForm />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default SignUp;