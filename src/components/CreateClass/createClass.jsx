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

const CreateClass = (props) => {
    const [createClassFail, setCreateClassFail] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = event.target;
        console.log(data.className.value)
        console.log(data.description.value)
        ClassService.createClass(data.className.value, data.description.value)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Success");
                    props.handleCloseCreateClass()
                    props.handleRefresh()
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch((err) => {
                setCreateClassFail(true);
            });
    };
    return (
        <Box sx={style}>
            {createClassFail ? (
                <Alert severity="error">
                     Tạo lớp thất bại
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
                    Tên lớp
                </Typography>
                <TextField
                    name="className"
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
                    Mô tả
                </Typography>
                <TextField
                    name="description"
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
                            Tạo lớp
                        </Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default CreateClass;