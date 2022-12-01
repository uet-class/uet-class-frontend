import {Alert, Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
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

const TeacherDeleteClass = (props) => {
    const [deleteClassFail, setDeleteClassFail] = React.useState(false);

    const state = {
        button: 0
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (state.button === 0) {
            console.log("No clicked!");
            props.handleCloseTeacherDeleteClass()
        }
        if (state.button === 1) {
            console.log("Yes clicked!");
            ClassService.deleteClass(props.deleteClassID)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("Success");
                        props.handleCloseTeacherDeleteClass()
                        props.handleRefresh()
                    } else {
                        const error = new Error(res.error);
                        throw error
                    }
                })
                .catch((err) => {
                    setDeleteClassFail(true);
                });
        }
    }

    return (
        <Box sx={style}>
            {deleteClassFail ? (
                <Alert severity={"error"}>
                    Xóa lớp thất bại
                </Alert>
            ) : null}
            <Box component={"form"} onSubmit={handleSubmit}>
                <Typography>
                    Bạn có chắc muốn xóa lớp này?
                </Typography>
                <Grid container
                    sx={{
                        paddingTop: 3
                    }}
                >
                    <Grid
                        item xs={6}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Button
                            onClick={() => (state.button = 0)}
                            name={"noBtn"}
                            value={"noBtn"}
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#FF0000",
                                borderRadius: 4,
                            }}
                        >
                            <Typography
                                paddingLeft={1}
                                className={"sign-in"}
                                fontSize={20}
                                fontWeight={500}
                            >
                                Không
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid
                        item xs={6}
                        display={"flex"}
                        justifyContent={"center"}
                    >
                        <Button
                            onClick={() => (state.button = 1)}
                            name={"yesBtn"}
                            value={"yesBtn"}
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#00FF00",
                                borderRadius: 4,
                            }}
                        >
                            <Typography
                                paddingLeft={1}
                                className={"sign-in"}
                                fontSize={20}
                                fontWeight={500}
                            >
                                Có
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default TeacherDeleteClass;