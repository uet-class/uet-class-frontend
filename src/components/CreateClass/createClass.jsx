import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

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

const CreateClass = () => {
    return (
        <Box sx={style}>
            <form>
                <Box
                    component={"form"}
                >
                    <Typography
                        className={"login-info"}
                        fontSize={20}
                        fontWeight={500}
                    >
                        Tên lớp
                    </Typography>
                    <TextField
                        name="username"
                        className={"input-rounded"}
                        sx={{
                            width: "100%",
                        }}
                    ></TextField>
                    <Typography
                        className={"login-info"}
                        fontSize={20}
                        fontWeight={500}
                    >
                        Mã lớp
                    </Typography>
                    <TextField
                        name="username"
                        className={"input-rounded"}
                        sx={{
                            width: "100%",
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
                        name="username"
                        className={"input-rounded"}
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
                            <AddIcon style={{ color: 'white' }} />
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
            </form>
        </Box>
    )
}

export default CreateClass;