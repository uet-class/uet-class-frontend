import React from "react";
import {Alert, Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import Logo from "../../assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import {useNavigate} from "react-router-dom";
import "./signInForm.css";
import AuthService from "../../services/auth.service";

const SignInForm = () => {
    const [fail, setFail] = React.useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (Event) => {
        Event.preventDefault();
        const data = new FormData(Event.currentTarget);
        console.log(data.get("email"));
        console.log(data.get("password"));
        AuthService.login(data.get("email"), data.get("password"))
            .then((res) => {
                if (res.status === 200) {
                    navigate('/home');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch((err) => {
                setFail(true);
            });
    };

    const toSignIn = () => {
        navigate('/signin')
    }

    return (
        <Box
            className={"login-section"}
            bgcolor={"#FCF9F9"}
            justifyContent={"center"}
            alignItems={"center"}
            minHeight={"90vh"}
            boxShadow={3}
            sx={{
                marginRight: 10,
                borderRadius: 15,
            }}
        >
            <Container component={"main"}>
                {fail ? (
                    <Alert severity="error">
                        Đăng nhập thất bại, hãy kiểm tra lại thông tin!
                    </Alert>
                ) : null}
                <form onSubmit={handleSubmit}>
                    <Box
                        className={"login-header"}
                        sx={{
                            marginTop: 6,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: 5,
                        }}
                    >
                        <img src={Logo} alt={"logo"}/>
                        <Typography className={"app-title"} fontSize={46} fontWeight={700}>
                            UET CLASS
                        </Typography>
                    </Box>

                    <Box
                        className={"login-form"}
                        component={"form"}
                        sx={{
                            marginTop: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                        }}
                    >
                        <Typography
                            className={"login-info"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Email
                        </Typography>
                        <TextField
                            name="email"
                            className={"input-rounded"}
                            sx={{
                                width: "100%",
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon/>
                                    </InputAdornment>
                                ),
                            }}

                        ></TextField>
                        <Typography
                            type={"password"}
                            className={"login-info"}
                            fontSize={20}
                            fontWeight={500}
                            sx={{
                                paddingTop: 2,
                            }}
                        >
                            Password
                        </Typography>
                        <TextField
                            className={"input-rounded"}
                            name="password"
                            type="password"
                            sx={{
                                width: "100%",
                                paddingBottom: 8,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyIcon/>
                                    </InputAdornment>
                                ),
                            }}></TextField>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        color: "#015198",
                                        borderRadius: 4,
                                    }}
                                    onClick={toSignIn}
                                >
                                    <Typography
                                        className={"sign-in"}
                                        fontSize={20}
                                        fontWeight={500}
                                    >
                                        Sign in
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Link href="/signUp" variant="body2">
                                    <Typography
                                        className={"login-info"}
                                        fontSize={20}
                                        fontWeight={500}
                                        sx={{
                                            paddingTop: 0.5,
                                        }}
                                    >
                                        or sign up a new account?
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}

export default SignInForm;