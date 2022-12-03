import React from "react";
import {Alert, Box, Button, Grid, Link, TextField, Typography} from "@mui/material";
import Logo from "../../assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import "./signInForm.css";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";

const SignInForm = () => {
    const [fail, setFail] = React.useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = event.target;
        AuthService.login(data.email.value, data.password.value)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res)
                    if (res.data.message.isAdmin === true) {
                        navigate('/admin/reports')
                    } else {
                        navigate('/home');
                    }
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch((err) => {
                setFail(true);
            });
    };

    return (
        <Box
            boxShadow={3}
            bgcolor={"#FCF9F9"}
            minHeight={"80vh"}
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
            {fail ? (
                <Alert severity="error">
                    Đăng nhập thất bại, hãy kiểm tra lại thông tin!
                </Alert>
            ) : null}
            <img src={Logo} alt={"logo"}/>
            <Typography className={"app-title"} fontSize={46} fontWeight={700}>
                UET CLASS
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <Typography
                    className={"login-info"}
                    fontSize={20}
                    fontWeight={500}
                    marginTop={5}
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
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Đăng nhập
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/signUp" variant="body2">
                            {"Chưa có tài khoản? Đăng ký"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default SignInForm;