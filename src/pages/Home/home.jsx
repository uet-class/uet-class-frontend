import Header from "../../components/Header/header";
import {Box, Button, Container, createTheme, Grid, Modal, ThemeProvider, Typography} from "@mui/material";
import "./home.css"
import React, {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import CreateClass from "../../components/CreateClass/createClass";
import JoinClass from "../../components/JoinClass/joinClass";
import AuthService from "../../services/auth.service";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [openCreateClass, setOpenCreateClass] = useState(false);
    const handleOpenCreateClass = () => setOpenCreateClass(true);
    const handleCloseCreateClass = () => setOpenCreateClass(false);

    const [openJoinClass, setOpenJoinClass] = useState(false);
    const handleOpenJoinClass = () => setOpenJoinClass(true);
    const handleCloseJoinClass = () => setOpenJoinClass(false);

    const [isShow, setIsShow] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!AuthService.isUser()) {
            navigate("/signin");
        } else {
            const fetchData = async () => {
                setIsShow(true);
            };
            fetchData();
        }
    }, );

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
                                        Lớp học của tôi
                                    </Typography>
                                </Grid>
                                <Grid
                                    item xs={4.25}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    <Button
                                        onClick={handleOpenCreateClass}
                                        variant="contained"
                                        sx={{
                                            color: "#305264",
                                            borderRadius: 4,
                                        }}
                                    >
                                        <AddIcon style={{color: 'white'}}/>
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
                                <Grid
                                    item xs={1.75}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    <Button
                                        onClick={handleOpenJoinClass}
                                        variant="contained"
                                        sx={{
                                            color: "#305264",
                                            borderRadius: 4,
                                        }}
                                    >
                                        <AddIcon style={{color: 'white'}}/>
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

                        <Modal
                            open={openCreateClass}
                            onClose={handleCloseCreateClass}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box>
                                <CreateClass/>
                            </Box>
                        </Modal>

                        <Modal
                            open={openJoinClass}
                            onClose={handleCloseJoinClass}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box>
                                <JoinClass/>
                            </Box>
                        </Modal>
                    </Container>
                </Header>
            ) : null}
        </ThemeProvider>
    )
}

export default Home;