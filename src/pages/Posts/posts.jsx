import "./posts.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";
import {
    Avatar,
    Box,
    Button, Container,
    Grid,
    Modal,
    Typography,
} from "@mui/material";
import ClassHeader from "../../components/ClassHeader/classHeader";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "../../components/CreatePost/createPost";
import postService from "../../services/post.service";
import UserService from "../../services/user.service";
import PostComments from "../../components/PostComments/postComments";
import DeletePost from "../../components/DeletePost/deletePost";
import UpdatePost from "../../components/UpdatePost/updatePost";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

const Posts = () => {
    let classID = localStorage.getItem("classID");

    const [openCreatePost, setOpenCreatePost] = useState(false);
    const [refreshPost, setRefreshPost] = useState(false);
    const handleRefresh = () => {
        setRefreshPost((current) => !current);
    };

    const navigate = useNavigate();

    const [post, setPost] = useState();

    const getAllPosts = () => {
        postService.getAllPosts(classID).then((listPosts) => {
            const postArr = [];
            if (listPosts.data.message != null) {
                for (let i = 0; i < listPosts.data.message.length; i++) {
                    if (listPosts.data.message[i].DeletedAt == null) {
                        postArr.push(listPosts.data.message[i]);
                    }
                }
            }
            postArr.reverse();
            setPost(postArr);
        });
    };

    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        AuthService.isUser(navigate);
        const fetchData = async () => {
            await getAllPosts();
            UserService.getUserInfo().then((info) => {
                setUserInfo(info.ID)
            });
        };
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshPost, navigate]);

    const handleOpenCreatePost = () => setOpenCreatePost(true);
    const handleCloseCreatePost = () => setOpenCreatePost(false);

    const [openPostComment, setOpenPostComment] = useState(false);
    const handleOpenPostComment = () => setOpenPostComment(true);
    const handleClosePostComment = () => setOpenPostComment(false);

    const [postID, setPostID] = useState();

    const [openDeletePost, setOpenDeletePost] = useState(false);
    const handleOpenDeletePost = () => setOpenDeletePost(true);
    const handleCloseDeletePost = () => setOpenDeletePost(false)

    const [openUpdatePost, setOpenUpdatePost] = useState(false);
    const handleOpenUpdatePost = () => setOpenUpdatePost(true);
    const handleCloseUpdatePost = () => setOpenUpdatePost(false);

    return (
        <DashbroadLayout>
            <ClassHeader>
                <Box
                    paddingBottom={2}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#0A5379",
                            marginLeft: 1.4,
                            height: 50,
                            width: 160,
                            marginTop: 1,
                            textTransform: "none",
                        }}
                        onClick={handleOpenCreatePost}
                    >
                        <AddIcon style={{color: "white"}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Tạo mới
                        </Typography>
                    </Button>
                </Box>
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        paddingLeft: 1,
                        paddingRight: 3,
                        maxHeight: "70vh",
                        overflow: "auto",
                        paddingBottom: 2,
                    }}
                >
                    {post?.map((post) => (
                        <Box
                            boxShadow={3}
                            bgcolor={"#FCF9F9"}
                            sx={{
                                marginBottom: 3,
                                paddingTop: 1,
                            }}
                        >
                            <Grid
                                container
                                className={"post-header"}
                                sx={{
                                    paddingBottom: 2,
                                }}
                            >
                                <Grid
                                    item
                                    xs={0.5}
                                    sx={{
                                        paddingBottom: 2,
                                        paddingLeft: 1.5,
                                        paddingTop: 1,
                                    }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={
                                            "https://i.insider.com/61135525ad63f30019501966?width=700"
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={10.5}
                                >
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: 25,
                                                }}
                                            >
                                                {post.CreatorName}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                {moment(post.UpdatedAt).format("DD/MM/YYYY, h:mm:ss a")}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {post.CreatorID === userInfo ? (
                                    <Grid item xs={1}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <Button
                                                    sx={{width: 3}}
                                                    onClick={() => {
                                                        handleOpenDeletePost();
                                                        setPostID(post.ID);
                                                    }}
                                                >
                                                    <DeleteIcon style={{color: "red"}}/>
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button
                                                    sx={{width: 3}}
                                                    onClick={() => {
                                                        handleOpenUpdatePost();
                                                        setPostID(post.ID);
                                                    }}
                                                >
                                                    <EditIcon style={{ color: "#0A5379" }} />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ) : null}
                            </Grid>
                            <Grid
                                container
                                className={"post-content"}
                                sx={{
                                    paddingBottom: 2,
                                    paddingLeft: 5,
                                }}
                            >
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            borderBottom: 1,
                                            maxWidth: 1000,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: 25,
                                            }}
                                        >
                                            {post.Title}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        paddingTop: 2,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 300,
                                            fontSize: 18,
                                        }}
                                    >
                                        {post.Content}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                containter
                                className={"comment"}
                                sx={{
                                    paddingBottom: 1,
                                    paddingLeft: 4,
                                }}
                            >
                                <Button
                                    onClick={() => {
                                        handleOpenPostComment();
                                        setPostID(post.ID);
                                    }}
                                >
                                    <Typography>
                                        Hiển thị bình luận
                                    </Typography>
                                </Button>
                            </Grid>
                        </Box>
                    ))}
                </Container>
            </ClassHeader>

            <Modal
                open={openCreatePost}
                onClose={handleCloseCreatePost}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreatePost
                    handleCloseCreatePost={handleCloseCreatePost}
                    handleRefresh={handleRefresh}
                />
            </Modal>

            <Modal
                open={openPostComment}
                onClose={handleClosePostComment}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PostComments handleRefresh={handleRefresh} postID={postID}/>
            </Modal>

            <Modal
                open={openDeletePost}
                onClose={handleCloseDeletePost}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeletePost
                    handleRefresh={handleRefresh}
                    postID={postID}
                    handleCloseDeletePost={handleCloseDeletePost}
                />
            </Modal>

            <Modal
                open={openUpdatePost}
                onClose={handleCloseUpdatePost}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <UpdatePost
                    handleRefresh={handleRefresh}
                    postID={postID}
                    handleCloseUpdatePost={handleCloseUpdatePost}
                />
            </Modal>
        </DashbroadLayout>
    );
};

export default Posts;