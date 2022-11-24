import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ClassService from "../../services/class.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AdminAddUser = () => {
    const [createUserFail, setCreateUserFail] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = event.target;
        ClassService.createClass(data.className.value, data.description.value)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Success");
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch((err) => {
                setCreateUserFail(true);
            });
    };
    return (
        <Box sx={style}>
            {createUserFail ? (
                <Alert severity="error">
                    Thêm người dùng thất bại
                </Alert>
            ) : null}
            <Box
                component={"form"} onSubmit={handleSubmit}
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
                    type="email"
                    className={"input-rounded"}
                    autoComplete='off'
                    sx={{
                        width: "100%",
                        paddingBottom: 3,
                    }}
                ></TextField>
                <Typography
                    className={"login-info"}
                    fontSize={20}
                    fontWeight={500}
                >
                    Mật khẩu
                </Typography>
                <TextField
                    name="password"
                    className={"input-rounded"}
                    autoComplete='off'
                    sx={{
                        width: "100%",
                        paddingBottom: 3,
                    }}
                ></TextField>
                <Grid
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            color: "#015198",
                            borderRadius: 4,
                        }}
                    >
                        <AddIcon style={{color: 'white'}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Thêm người dùng
                        </Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminAddUser;