import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import Logo from "../../assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

const SignUpForm = () => {
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
            <Container component={"main"} maxWidth={"xs"}>
                <Box
                    className={"login-header"}
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
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
                >
                    <Typography className={"login-info"} fontSize={20} fontWeight={500}>
                        Username
                    </Typography>
                    <TextField
                        className={"input-rounded"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon/>
                                </InputAdornment>
                            ),
                        }}
                    ></TextField>
                    <Typography className={"login-info"} fontSize={20} fontWeight={500}>
                        New password
                    </Typography>
                    <TextField
                        className={"input-rounded"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon/>
                                </InputAdornment>
                            ),
                        }}></TextField>
                    <Typography className={"login-info"} fontSize={20} fontWeight={500}>
                        Confirmed password
                    </Typography>
                    <TextField
                        className={"input-rounded"}
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