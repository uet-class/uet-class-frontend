import Header from "../../components/Header/header";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  createTheme,
  Grid,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./home.css";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateClass from "../../components/CreateClass/createClass";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import ClassService from "../../services/class.service";
import TeacherDeleteClass from "../../components/TeacherDeleteClass/teacherDeleteClass";
import UserService from "../../services/user.service";
import StudentLeaveClass from "../../components/StudentLeaveClass/studentLeaveClass";

const Home = () => {
  const [openCreateClass, setOpenCreateClass] = useState(false);
  const handleOpenCreateClass = () => setOpenCreateClass(true);
  const handleCloseCreateClass = () => setOpenCreateClass(false);

  const [openTeacherDeleteClass, setOpenTeacherDeleteClass] = useState(false);
  const handleOpenTeacherDeleteClass = () => setOpenTeacherDeleteClass(true);
  const handleCloseTeacherDeleteClass = () => setOpenTeacherDeleteClass(false);

  const [deleteClassID, setDeleteClassID] = useState()

  const [refreshClass, setRefreshClass] = useState(false);
  const handleRefresh = () => {
    setRefreshClass((current) => !current);
  };

  const [isShow, setIsShow] = useState(false);

  const [classTeacher, setClassTeacher] = useState();
  const [classStudent, setClassStudent] = useState();

  const [openStudentLeaveClass, setOpenStudentLeaveClass] = useState(false);
  const handleOpenStudentLeaveClass = () => setOpenStudentLeaveClass(true);
  const handleCloseStudentLeaveClass = () => setOpenStudentLeaveClass(false);
  const [leaveClassID, setLeaveClassID] = useState()
  const [userEmail, setUserEmail] = useState()

  const navigate = useNavigate();

  const getClassTeacher = () => {
    ClassService.listClass().then((listClass) => {
      const classArr = [];
      if (listClass.data.message.teacherClasses != null) {
        for (let i = 0; i < listClass.data.message.teacherClasses.length; i++) {
          if (listClass.data.message.teacherClasses[i].DeletedAt == null) {
            classArr.push(listClass.data.message.teacherClasses[i]);
          }
        }
      }
      setClassTeacher(classArr);
    });
  };

  const getClassStudent = () => {
    ClassService.listClass().then((listClass) => {
      const classArr = [];
      if (listClass.data.message.studentClasses != null) {
        for (let i = 0; i < listClass.data.message.studentClasses.length; i++) {
          if (listClass.data.message.studentClasses[i].DeletedAt == null) {
            classArr.push(listClass.data.message.studentClasses[i]);
          }
        }
      }
      setClassStudent(classArr);
    });
  }

  const handleJoinClass = (id) => {
    localStorage.setItem("classID", id);
    navigate(`/class/${id}/posts`);
  }

  useEffect(() => {
    AuthService.isUser(navigate)
    UserService.getUserInfo().then((info) => {
      setUserEmail(info.Email)
    });
    const fetchData = async () => {
      setIsShow(true);
      await getClassTeacher();
      await getClassStudent();
    };
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshClass]);


  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isShow ? (
        <Header>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              paddingLeft: 8,
              paddingRight: 15,
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "#A9A9A9",
                paddingTop: 6,
                paddingBottom: 2,
              }}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Typography
                    className={"your-class"}
                    fontSize={32}
                    fontWeight={600}
                  >
                    Lớp của tôi
                  </Typography>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="flex-end">
                  <Button
                    onClick={handleOpenCreateClass}
                    variant="contained"
                    sx={{
                      backgroundColor: "#305264",
                      borderRadius: 4,
                    }}
                  >
                    <AddIcon style={{ color: "white" }} />
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
              </Grid>
            </Box>

            <Box
              sx={{
                paddingTop: 5,
              }}
            >
              <Grid
                container
                spacing={4}
                sx={{
                  maxHeight: "79vh",
                  overflow: "auto",
                }}
              >
                {classTeacher?.map((userClass) => (
                  <Grid item>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        minWidth: 310,
                        maxWidth: 310,
                      }}
                    >
                      <Box
                        sx={{
                          paddingTop: "56.25%",
                          backgroundColor: "primary.dark",
                        }}
                      ></Box>
                      <CardContent
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        <Typography variant={"h5"}>
                          {userClass.ClassName}
                        </Typography>
                        <Typography>{userClass.Description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                            size={"small"}
                            color={"primary"}
                            onClick={() => {
                              handleJoinClass(userClass.ID);
                            }}
                        >
                          Vào lớp
                        </Button>
                        <Button
                            size={"small"}
                            color={"primary"}
                            onClick={() => {
                              handleOpenTeacherDeleteClass();
                              setDeleteClassID(userClass.ID);
                            }}
                        >
                          Xóa lớp
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
                {classStudent?.map((userClass) => (
                    <Grid item>
                      <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 310,
                            maxWidth: 310,
                          }}
                      >
                        <Box
                            sx={{
                              paddingTop: "56.25%",
                              backgroundColor: "#90EE90",
                            }}
                        ></Box>
                        <CardContent
                            sx={{
                              flexGrow: 1,
                            }}
                        >
                          <Typography variant={"h5"}>
                            {userClass.ClassName}
                          </Typography>
                          <Typography>{userClass.Description}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                              size={"small"}
                              color={"primary"}
                              onClick={() => {
                                handleJoinClass(userClass.ID);
                              }}
                          >
                            Vào lớp
                          </Button>
                          <Button
                              size={"small"}
                              color={"primary"}
                              onClick={() => {
                                handleOpenStudentLeaveClass();
                                setLeaveClassID(userClass.ID);
                              }}
                          >
                            Rời khỏi lớp
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                ))}
              </Grid>
            </Box>

            <Modal
              open={openCreateClass}
              onClose={handleCloseCreateClass}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <CreateClass
                  handleRefresh={handleRefresh}
                  handleCloseCreateClass={handleCloseCreateClass}
                />
              </Box>
            </Modal>

            <Modal
                open={openCreateClass}
                onClose={handleCloseCreateClass}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <Box>
                <CreateClass
                    handleRefresh={handleRefresh}
                    handleCloseCreateClass={handleCloseCreateClass}

                />
              </Box>
            </Modal>

            <Modal
                open={openTeacherDeleteClass}
                onClose={handleCloseTeacherDeleteClass}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <Box>
                <TeacherDeleteClass
                    handleRefresh={handleRefresh}
                    handleCloseTeacherDeleteClass={handleCloseTeacherDeleteClass}
                    deleteClassID={deleteClassID}
                />
              </Box>
            </Modal>

            <Modal
                open={openStudentLeaveClass}
                onClose={handleCloseStudentLeaveClass}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <Box>
                <StudentLeaveClass
                    handleRefresh={handleRefresh}
                    handleCloseStudentLeaveClass={handleCloseStudentLeaveClass}
                    leaveClassID={leaveClassID}
                    userEmail={userEmail}
                />
              </Box>
            </Modal>
          </Container>
        </Header>
      ) : null}
    </ThemeProvider>
  );
};

export default Home;
