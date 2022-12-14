import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AdminService from "../../services/admin.service";

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

const AdminDeleteUser = (props) => {
    const [deleteUserFail, setDeleteUserFail] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = event.target;
        console.log(data.email.value)
        AdminService.deleteUser(data.email.value)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Success");
                    props.handleRefresh()
                    props.handleCloseDeleteUser()
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch((err) => {
                setDeleteUserFail(true);
            });
    };
    return (
        <Box sx={style}>
            {deleteUserFail ? (
                <Alert severity="error">
                    Xóa người dùng thất bại
                </Alert>
            ) : null}
            <Box
                component={"form"} onSubmit={handleSubmit}
            >
                <Typography
                    className={"login-info"}
                    fontSize={20}
                    fontWeight={500}
                    sx={{
                        color: "#305264"
                    }}
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
                <Grid
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "#305264",
                            textTransform: "none",
                        }}
                    >
                        <DeleteIcon style={{color: 'white'}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Xóa người dùng
                        </Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminDeleteUser;