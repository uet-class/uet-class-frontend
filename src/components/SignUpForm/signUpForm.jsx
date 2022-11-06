import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import Logo from "../../assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

const SignUpForm = () => {
    const openInNewTab = () => {
        window.open("https://www.youtube.com/watch?v=ZZ5LpwO-An4", '_blank', 'noopener,noreferrer');
    };

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
                        Username
                    </Typography>
                    <TextField
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
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon/>
                                </InputAdornment>
                            ),
                        }}></TextField>
                    <Typography
                        type={"password"}
                        className={"login-info"}
                        fontSize={20}
                        fontWeight={500}
                        sx={{
                            paddingTop: 2,
                        }}
                    >
                        Confirmed password
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
                                onClick={openInNewTab}
                            >
                                <Typography
                                    className={"sign-in"}
                                    fontSize={20}
                                    fontWeight={500}
                                >
                                    Sign up
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default SignUpForm;