import {Avatar, Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import postService from "../../services/post.service";
import commentService from "../../services/comment.service";
import UserService from "../../services/user.service";
import Comment from "../Comment/comment";
import moment from "moment/moment";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PostComments = (props) => {
    const [comment, setComment] = useState();
    const [creatorName, setCreatorName] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [creatorID, setCreatorID] = useState()
    const [refreshComment, setRefreshComment] = useState(false);
    const handleRefresh = () => {
        setRefreshComment((current) => !current);
    };
    const getPost = () => {
        postService.getPost(props.postID).then((post) => {
            const commentArr = [];
            if (post != null && post.Comment != null) {
                for (let i = 0; i < post.Comment.length; i++) {
                    if (post.Comment[i].DeletedAt == null) {
                        commentArr.push(post.Comment[i]);
                    }
                }
            }
            setCreatorName(post.CreatorName);
            setTitle(post.Title);
            setContent(post.Content);
            setComment(commentArr);
        })
    }

    const handleComment = async (event) => {
        event.preventDefault();
        const data = event.target;
        commentService.createComment(creatorID, props.postID, data.comment.value)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Success");
                    handleRefresh()
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
        data.reset();
    }

    useEffect(() => {
        const fetchData = async () => {
            await getPost();
            UserService.getUserInfo().then((info) => {
                setCreatorID(info.ID)
            });
        };
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshComment])

    return (
        <Box sx={style}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar alt="Remy Sharp"
                            src={"https://i.insider.com/61135525ad63f30019501966?width=700"}/>
                </Grid>
                <Grid item xs={11}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={"h5"}>
                                {creatorName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box
                sx={{
                    borderBottom: 1
                }}
            >
                <Grid
                    item
                    sx={{
                        paddingLeft: 10,
                        paddingTop: 2,
                    }}
                >
                    <Typography
                        variant={"h4"}
                        sx={{
                            paddingBottom: 2,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            paddingBottom: 2,
                            maxHeight: '20vh',
                            overflow: 'auto'
                        }}
                    >
                        {content}
                    </Typography>
                </Grid>
            </Box>
            <Grid
                container
                sx={{
                    maxHeight: '30vh',
                    overflow: 'auto'
                }}
            >
                {comment?.map((comment) => {
                    return (
                        <Comment
                            name={comment.CreatorID}
                            avatar={"https://i.insider.com/61135525ad63f30019501966?width=700"}
                            content={comment.Content}
                            time={moment(comment.UpdatedAt).format("DD/MM/YYYY, h:mm:ss a")}
                            creatorID={creatorID}
                            commentID={comment.ID}
                        />
                    );
                })}
            </Grid>
            <Box component={"form"} onSubmit={handleComment}>
                <Grid container
                      sx={{
                          paddingTop: 3,
                      }}
                >
                    <Grid item xs={1}>
                        <Avatar alt="Remy Sharp"
                                src={"https://i.insider.com/61135525ad63f30019501966?width=700"}/>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            name="comment"
                            className={"input-rounded"}
                            autoComplete='off'
                            sx={{
                                width: "100%",
                                paddingBottom: 3,
                            }}
                        >
                        </TextField>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    sx={{
                        paddingLeft: 8,
                    }}
                >
                    Bình luận
                </Button>
            </Box>
        </Box>
    )
}

export default PostComments;