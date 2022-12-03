import "./news.css";
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
    Button,
    createTheme, Grid,
    Modal, TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import ClassHeader from "../../components/ClassHeader/classHeader";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "../../components/CreatePost/createPost";
import Comment from "../../components/Comment/comment";

const News = () => {
    var sideBar = {};
    sideBar.classLinks = ["/home", "/assignments"];
    sideBar.classes = ["Tương tác người máy", "Xác suất thống kê"];
    sideBar.basicLink = [
        "/home",
        "/news",
        "/documents",
        "/assignments",
        "/other",
    ];
    sideBar.basicLinkName = [
        "Trang chủ",
        "Bảng tin",
        "Tài Tài liệu",
        "Bài tập",
        "Khác",
    ];
    sideBar.basicIcon = [
        <HomeIcon/>,
        <NewsIcon/>,
        <DocumentIcon/>,
        <HomeworkIcon/>,
        <OtherIcon/>,
    ];

    const [openCreatePost, setOpenCreatePost] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        AuthService.isUser(navigate)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },);

    const handleOpenCreatePost = () => setOpenCreatePost(true);
    const handleCloseCreatePost = () => setOpenCreatePost(false);

    const theme = createTheme({
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
    });

    const news = [1, 2, 3, 4, 5]
    const comment_example = [
        {
            name: "Phạm Vũ Minh",
            content: "Vâng ạ",
            time: "1 giờ trước",
            avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
        },
        {
            name: "Phạm Vũ Minh",
            content: "Vâng ạ",
            time: "1 giờ trước",
            avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
        },
        {
            name: "Phạm Vũ Minh",
            content: "Vâng ạ",
            time: "1 giờ trước",
            avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
        },

        {
            name: "Phạm Vũ Minh",
            content: "Vâng ạ",
            time: "1 giờ trước",
            avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
        },

        {
            name: "Phạm Vũ Minh",
            content: "Vâng ạ",
            time: "1 giờ trước",
            avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
        },

        {
            name: "Phạm Vũ Minh",
            content: "Vâng ạ",
            time: "1 giờ trước",
            avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
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
                            {news.map(() => (
                                <Grid item xs={12} paddingBottom={3}>
                                    <Box
                                        sx={{
                                            border: 1,
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
                                                    <Grid item xs={12}>
                                                        <Typography variant={"h5"}>
                                                            Phạm Vũ Minh
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant={"normal-text"}>
                                                            13:13
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            item
                                            sx={{
                                                paddingLeft: 2,
                                                paddingTop: 2,
                                            }}
                                        >
                                            <Typography variant={"h4"}>
                                                Đây là tiêu đề
                                            </Typography>
                                            <Typography variant={"h5"}>
                                                Đây là nội dung
                                            </Typography>
                                        </Grid>

                                        <Grid
                                            item
                                            sx={{
                                                paddingLeft: 10,
                                                paddingTop: 5,
                                                maxHeight: "30vh",
                                                overflow: 'auto'
                                            }}
                                        >
                                            {comment_example.map((comment) => {
                                                return (
                                                    <Comment
                                                        name={comment.name}
                                                        avatar={comment.avatar}
                                                        content={comment.content}
                                                        time={comment.time}
                                                    />
                                                );
                                            })}
                                        </Grid>

                                        <Grid container
                                              sx={{
                                                  paddingLeft: 2,
                                                  paddingTop: 2,
                                              }}
                                        >
                                            <Box component={"form"}
                                                 sx={{
                                                     paddingBottom: 2,
                                                     width: "80vw"
                                                 }}
                                            >
                                                <TextField
                                                    name={"comment"}
                                                    sx={{
                                                        bgcolor: "#D9D9D9",
                                                        width: "100%",
                                                    }}
                                                >
                                                </TextField>
                                                <Button>
                                                    Bình luận
                                                </Button>
                                            </Box>
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
                    <CreatePost/>
                </Modal>
            </DashbroadLayout>
        </ThemeProvider>
    );
};

export default News;
