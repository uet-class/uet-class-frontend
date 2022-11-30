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
import JoinClass from "../../components/JoinClass/joinClass";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import classService from "../../services/class.service";

const Home = () => {
  const [openCreateClass, setOpenCreateClass] = useState(false);
  const handleOpenCreateClass = () => setOpenCreateClass(true);
  const handleCloseCreateClass = () => setOpenCreateClass(false);

  const [openJoinClass, setOpenJoinClass] = useState(false);
  const handleOpenJoinClass = () => setOpenJoinClass(true);
  const handleCloseJoinClass = () => {
    setOpenJoinClass(false);
  };

  const [refreshClass, setRefreshClass] = useState(false);
  const handleRefresh = () => {
    setRefreshClass((current) => !current);
  };

  const [isShow, setIsShow] = useState(false);

  const [classes, setClasses] = useState();

  const navigate = useNavigate();

  const getClassTeacher = () => {
    classService.listClass().then((listClass) => {
      const classArr = [];
      for (let i = 0; i < listClass.data.message.teacherClasses.length; i++) {
        if (listClass.data.message.teacherClasses[i].DeletedAt == null) {
          classArr.push(listClass.data.message.teacherClasses[i]);
        }
      }
      setClasses(classArr);
    });
  };

  useEffect(() => {
    AuthService.isUser(navigate)
    const fetchData = async () => {
      setIsShow(true);
      await getClassTeacher();
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
                <Grid item xs={6}>
                  <Typography
                    className={"your-class"}
                    fontSize={32}
                    fontWeight={600}
                  >
                    Lớp của tôi
                  </Typography>
                </Grid>
                <Grid item xs={4.25} display="flex" justifyContent="flex-end">
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
                <Grid item xs={1.75} display="flex" justifyContent="flex-end">
                  <Button
                    onClick={handleOpenJoinClass}
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
                      Tham gia lớp
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
                {classes?.map((userClass) => (
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
                        <Button size={"small"} color={"primary"}>
                          Vào lớp
                        </Button>
                        <Button size={"small"} color={"primary"}>
                          Xóa lớp
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
              open={openJoinClass}
              onClose={handleCloseJoinClass}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <JoinClass />
              </Box>
            </Modal>
          </Container>
        </Header>
      ) : null}
    </ThemeProvider>
  );
};

export default Home;
