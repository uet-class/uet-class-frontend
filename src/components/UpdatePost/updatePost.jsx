import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import PostService from "../../services/post.service";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdatePost = (props) => {
    const [updatePostFail, setUpdatePostFail] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = event.target;
        PostService.updatePost(props.postID, data.title.value, data.content.value)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Success");
                    props.handleCloseUpdatePost()
                    props.handleRefresh()
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch((err) => {
                setUpdatePostFail(true);
            });
    };

    return (
        <Box sx={style}>
            {updatePostFail ? (
                <Alert severity="error">
                    Chỉnh sửa thất bại
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
                        color: "#0A5379"
                    }}
                >
                    Tiêu đề
                </Typography>
                <TextField
                    name="title"
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
                    sx={{
                        color: "#0A5379"
                    }}
                >
                    Nội dung
                </Typography>
                <TextField
                    name="content"
                    className={"input-rounded"}
                    autoComplete='off'
                    multiline
                    maxRows={9}
                    minRows={9}
                    sx={{
                        width: "100%",
                        paddingBottom: 3,
                        fontWeight: 300,
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
                            backgroundColor: "#0A5379",
                            textTransform: "none",
                        }}
                    >
                        <AddIcon style={{color: 'white'}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Cập nhật
                        </Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default UpdatePost;