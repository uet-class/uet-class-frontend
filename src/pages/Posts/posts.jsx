import "./posts.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";
import {
    Avatar,
    Box,
    Button, Fade,
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
import moment from "moment";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import PopupState, {bindToggle, bindPopper} from 'material-ui-popup-state';
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import DeletePost from "../../components/DeletePost/deletePost";

const Posts = () => {
    //hardcode for class id
    let classID = localStorage.getItem("classID");
    var sideBar = {};
    sideBar.classLinks = ["/home", "/assignments"];
    sideBar.classes = ["Tương tác người máy", "Xác suất thống kê"];
    sideBar.basicLink = [
        "/home",
        `/class/${classID}/posts`,
        `/class/${classID}/documents`,
        `/class/${classID}/assignments`,
        `/class/${classID}/other`,
    ];
    sideBar.basicLinkName = [
        "Trang chủ",
        "Bảng tin",
        "Tài liệu",
        "Bài tập",
        "Danh sách lớp",
    ];
    sideBar.basicIcon = [
        <HomeIcon/>,
        <NewsIcon/>,
        <DocumentIcon/>,
        <HomeworkIcon/>,
        <OtherIcon/>,
    ];

    const [openCreatePost, setOpenCreatePost] = useState(false);
    const [refreshPost, setRefreshPost] = useState(false);
    const handleRefresh = () => {
        setRefreshPost((current) => !current);
    };

    const navigate = useNavigate();

    const [post, setPost] = useState()

    const getAllPosts = () => {
        postService.getAllPosts(classID).then((listPosts) => {
            const postArr = [];
            const creatorArr = [];
            if (listPosts.data.message != null) {
                for(let i = 0;i < listPosts.data.message.length;i++) {
                    if (listPosts.data.message[i].DeletedAt == null) {
                        postArr.push(listPosts.data.message[i]);
                    }
                    UserService.getCreatorName(listPosts.data.message[i].CreatorID).then((creatorName) => {
                        creatorArr.push(creatorName)
                    })
                }
            }
            postArr.reverse();
            creatorArr.reverse();
            setPost(postArr);
        });
    };

    const [userID, setUserID] = useState()

    useEffect(() => {
        AuthService.isUser(navigate)
        const fetchData = async () => {
            await getAllPosts();
            UserService.getUserInfo().then((info) => {
                setUserID(info.ID)
            });
        };
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshPost]);

    const handleOpenCreatePost = () => setOpenCreatePost(true);
    const handleCloseCreatePost = () => setOpenCreatePost(false);

    const [openPostComment, setOpenPostComment] = useState(false);
    const handleOpenPostComment = () => setOpenPostComment(true);
    const handleClosePostComment = () => setOpenPostComment(false);

    const [postID, setPostID] = useState()

    const [openDeletePost, setOpenDeletePost] = useState(false);
    const handleOpenDeletePost = () => setOpenDeletePost(true);
    const handleCloseDeletePost = () => setOpenDeletePost(false);

    return (
            <DashbroadLayout sideBar={sideBar}>
                <ClassHeader
                    className={"Tương tác người máy"}
                    classCode={"INT1234_21"}
                >
                    <Button
                        onClick={handleOpenCreatePost}
                        variant="contained"
                        sx={{
                            color: "#305264",
                            borderRadius: 4,
                            marginLeft: 1,
                        }}
                    >
                        <AddIcon style={{color: "white"}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Tạo bài đăng mới
                        </Typography>
                    </Button>

                    <Box
                        sx={{
                            paddingTop: 3,
                            marginLeft: 1,
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                maxHeight: '70vh',
                                overflow: 'auto'
                            }}
                        >
                            {post?.map((post) => (
                                <Grid item xs={12} paddingBottom={3}>
                                    <Box
                                        sx={{
                                            borderRadius: 8,
                                            bgcolor: "white",
                                        }}
                                    >
                                        <Grid container
                                              sx={{
                                                  paddingLeft: 2,
                                                  paddingTop: 2,
                                              }}
                                        >
                                            <Grid item xs={0.5}>
                                                <Avatar alt="Remy Sharp"
                                                        src={"https://i.insider.com/61135525ad63f30019501966?width=700"}/>
                                            </Grid>
                                            <Grid item xs={11.5}>
                                                <Grid container>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: 23,
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {post.CreatorName}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Typography>
                                                            {moment(post.UpdatedAt).format("DD/MM/YYYY, h:mm:ss a")}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid
                                                        item xs={1}
                                                        display="flex"
                                                        justifyContent="flex-end"
                                                    >
                                                        {userID === post.CreatorID ? (
                                                            <Grid>
                                                                <PopupState variant="popper" popupId="demo-popup-popper">
                                                                    {(popupState) => (
                                                                        <div>
                                                                            <Button {...bindToggle(popupState)}>
                                                                                <OtherIcon />
                                                                            </Button>
                                                                            <Popper {...bindPopper(popupState)} transition>
                                                                                {({ TransitionProps }) => (
                                                                                    <Fade {...TransitionProps} timeout={350}>
                                                                                        <Paper>
                                                                                            <MenuList
                                                                                                id="composition-menu"
                                                                                                aria-labelledby="composition-button"
                                                                                            >
                                                                                                <MenuItem>
                                                                                                    Sửa bài viết
                                                                                                </MenuItem>
                                                                                                <MenuItem
                                                                                                    onClick={handleOpenDeletePost}
                                                                                                >
                                                                                                    Xóa bài viết
                                                                                                </MenuItem>
                                                                                            </MenuList>
                                                                                        </Paper>
                                                                                    </Fade>
                                                                                )}
                                                                            </Popper>
                                                                        </div>
                                                                    )}
                                                                </PopupState>
                                                            </Grid>
                                                        ) : null}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            item
                                            sx={{
                                                paddingLeft: 10,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    paddingBottom: 2,
                                                    fontWeight: 600,
                                                    fontSize: 25,
                                                }}
                                            >
                                                {post.Title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    paddingBottom: 2,
                                                    fontWeight:100,
                                                }}
                                            >
                                                {post.Content}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            sx={{
                                                paddingLeft: 10,
                                            }}
                                        >
                                            <Button
                                                onClick={() => {
                                                    handleOpenPostComment();
                                                    setPostID(post.ID);
                                                }}
                                            >Hiển thị bình luận</Button>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </ClassHeader>

                <Modal
                    open={openCreatePost}
                    onClose={handleCloseCreatePost}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <CreatePost handleCloseCreatePost={handleCloseCreatePost}
                                handleRefresh={handleRefresh}
                    />
                </Modal>

                <Modal open={openPostComment}
                       onClose={handleClosePostComment}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                >
                    <PostComments handleRefresh={handleRefresh}
                                  postID={postID}
                    />
                </Modal>

                <Modal open={openDeletePost}
                       onClose={handleCloseDeletePost}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                >
                    <DeletePost postID={postID} />
                </Modal>
            </DashbroadLayout>
    );
};

export default Posts;
