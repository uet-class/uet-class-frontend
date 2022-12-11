import "./posts.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import {
  Avatar,
  Box,
  Button,
  createTheme,
  Grid,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ClassHeader from "../../components/ClassHeader/classHeader";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "../../components/CreatePost/createPost";
import postService from "../../services/post.service";
import UserService from "../../services/user.service";
import PostComments from "../../components/PostComments/postComments";

const Posts = () => {
  //hardcode for class id
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
      const creatorArr = [];
      if (listPosts.data.message != null) {
        for (let i = 0; i < listPosts.data.message.length; i++) {
          if (listPosts.data.message[i].DeletedAt == null) {
            postArr.push(listPosts.data.message[i]);
          }
          UserService.getCreatorName(listPosts.data.message[i].CreatorID).then(
            (creatorName) => {
              creatorArr.push(creatorName);
            }
          );
        }
      }
      postArr.reverse();
      creatorArr.reverse();
      setPost(postArr);
    });
  };

  useEffect(() => {
    AuthService.isUser(navigate);
    const fetchData = async () => {
      await getAllPosts();
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPost]);

  const handleOpenCreatePost = () => setOpenCreatePost(true);
  const handleCloseCreatePost = () => setOpenCreatePost(false);

  const [openPostComment, setOpenPostComment] = useState(false);
  const handleOpenPostComment = () => setOpenPostComment(true);
  const handleClosePostComment = () => setOpenPostComment(false);

  const [postID, setPostID] = useState();

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DashbroadLayout>
        <ClassHeader>
          <Button
            onClick={handleOpenCreatePost}
            variant="contained"
            sx={{
              color: "#305264",
              borderRadius: 4,
              marginLeft: 1,
            }}
          >
            <AddIcon style={{ color: "white" }} />
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
                maxHeight: "70vh",
                overflow: "auto",
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
                    <Grid
                      container
                      sx={{
                        paddingLeft: 2,
                        paddingTop: 2,
                      }}
                    >
                      <Grid item xs={0.5}>
                        <Avatar
                          alt="Remy Sharp"
                          src={
                            "https://i.insider.com/61135525ad63f30019501966?width=700"
                          }
                        />
                      </Grid>
                      <Grid item xs={11.5}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography variant={"h5"}>
                              {post.CreatorName}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
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
                        {post.Title}
                      </Typography>
                      <Typography
                        variant={"h5"}
                        sx={{
                          paddingBottom: 2,
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
                      >
                        Hiển thị bình luận
                      </Button>
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
          <PostComments handleRefresh={handleRefresh} postID={postID} />
        </Modal>
      </DashbroadLayout>
    </ThemeProvider>
  );
};

export default Posts;
