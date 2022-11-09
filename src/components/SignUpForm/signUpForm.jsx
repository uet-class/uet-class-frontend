import React from "react";
import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";
import Logo from "../../assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import "./signUpForm.css";

const SignUpForm = () => {
    return (
        <Box
            boxShadow={3}
            bgcolor={"#FCF9F9"}
            minHeight={"82vh"}
            justifyContent={"center"}
            sx={{
                my: 10,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 15
            }}
        >
            <img src={Logo} alt={"logo"}/>
            <Typography className={"app-title"} fontSize={46} fontWeight={700}>
                UET CLASS
            </Typography>
            <Box component="form">
                <Typography
                    className={"login-info"}
                    fontSize={20}
                    fontWeight={500}
                    marginTop={3}
                >
                    Email
                </Typography>
                <TextField
                    className={"input-rounded"}
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete='off'
                    autoFocus
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon/>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        marginBottom: 3,
                    }}
                />
                <Typography className={"login-info"} fontSize={20} fontWeight={500}>
                    Mật khẩu
                </Typography>
                <TextField
                    className={"input-rounded"}
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete='off'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <KeyIcon/>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        marginBottom: 3,
                    }}
                />
                <Typography className={"login-info"} fontSize={20} fontWeight={500}>
                    Nhập lại mật khẩu
                </Typography>
                <TextField
                    className={"input-rounded"}
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete='off'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <KeyIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Đăng ký
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/signIn" variant="body2">
                            {"Đã có tài khoản? Đi tới đăng nhập"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default SignUpForm;