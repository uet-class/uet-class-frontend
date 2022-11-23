import "./news.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import {
  Box,
  Button,
  createTheme,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ClassHeader from "../../components/ClassHeader/classHeader";
import AddIcon from "@mui/icons-material/Add";
import CreatePost from "../../components/CreatePost/createPost";

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
    <HomeIcon />,
    <NewsIcon />,
    <DocumentIcon />,
    <HomeworkIcon />,
    <OtherIcon />,
  ];

  const [isShow, setIsShow] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if (!AuthService.isUser()) {
    if (false) {
      navigate("/signin");
    } else {
      const fetchData = async () => {
        setIsShow(true);
      };
      fetchData();
    }
  });

  const handleOpenCreatePost = () => setOpenCreatePost(true);
  const handleCloseCreatePost = () => setOpenCreatePost(false);

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isShow ? (
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
          </ClassHeader>

          <Modal
            open={openCreatePost}
            onClose={handleCloseCreatePost}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <CreatePost />
            </Box>
          </Modal>
        </DashbroadLayout>
      ) : null}
    </ThemeProvider>
  );
};

export default News;
