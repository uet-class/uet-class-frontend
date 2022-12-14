import {Alert, Box, Button, Grid, Typography} from "@mui/material";
import postService from "../../services/post.service";
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const DeletePost = (props) => {
    const [deletePostFail, setDeletePostFail] = React.useState(false);

    const state = {
        button: 0
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (state.button === 0) {
            console.log("No clicked!");
            props.handleCloseDeletePost()
        }
        if (state.button === 1) {
            console.log("Yes clicked!");
            postService.deletePost(props.postID)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("Success");
                        props.handleCloseDeletePost()
                        props.handleRefresh()
                    } else {
                        const error = new Error(res.error);
                        throw error
                    }
                })
                .catch((err) => {
                    setDeletePostFail(true);
                });
        }
    }

    return (
        <Box sx={style}>
            {deletePostFail ? (
                <Alert severity={"error"}>
                    Xóa bài viết thất bại
                </Alert>
            ) : null}
            <Box
                component={"form"}
                onSubmit={handleSubmit}
                sx={{
                    padding: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: 25,
                        fontWeight: 500,
                        paddingLeft: 1,
                    }}
                >
                    Xóa bài viết này?
                </Typography>
                <Grid container
                      sx={{
                          paddingTop: 3
                      }}
                >
                    <Grid
                        item xs={9}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        paddingLeft={5}
                    >
                        <Button
                            onClick={() => (state.button = 1)}
                            name={"yesBtn"}
                            value={"yesBtn"}
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#305264",
                                textTransform: "none",
                            }}
                        >
                            <Typography
                                paddingLeft={1}
                                className={"sign-in"}
                                fontSize={20}
                                fontWeight={500}
                            >
                                Xác nhận
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid
                        item xs={3}
                        display={"flex"}
                        justifyContent={"flex-end"}
                    >
                        <Button
                            onClick={() => (state.button = 0)}
                            name={"noBtn"}
                            value={"noBtn"}
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#305264",
                                textTransform: "none",
                            }}
                        >
                            <Typography
                                paddingLeft={1}
                                className={"sign-in"}
                                fontSize={20}
                                fontWeight={500}
                            >
                                Hủy
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default DeletePost;