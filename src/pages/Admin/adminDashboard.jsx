import {Box, Button, Container, createTheme, Grid, Modal, ThemeProvider, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";
import Header from "../../components/Header/header";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AdminAddUser from "../../components/AdminAddUser/adminAddUser";
import AdminDeleteUser from "../../components/AdminDeleteUser/adminDeleteUser";
import AdminDeleteClass from "../../components/AdminDeleteClass/adminDeleteClass";

const AdminDashboard = () => {
    const [isShow, setIsShow] = useState(false);
    const navigate = useNavigate();

    const [openAddUser, setOpenAddUser] = useState(false);
    const handleOpenAddUser = () => setOpenAddUser(true);
    const handleCloseAddUser = () => setOpenAddUser(false);

    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const handleOpenDeleteUser = () => setOpenDeleteUser(true);
    const handleCloseDeleteUser = () => setOpenDeleteUser(false);

    const [openDeleteClass, setOpenDeleteClass] = useState(false);
    const handleOpenDeleteClass = () => setOpenDeleteClass(true);
    const handleCloseDeleteClass = () => setOpenDeleteClass(false);

    useEffect(() => {
        if (!AuthService.isUser()) {
            // if (false) {
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
                                <Grid item xs={6.75}>
                                    <Typography
                                        className={"your-class"}
                                        fontSize={32}
                                        fontWeight={600}
                                    >
                                        Danh sách báo cáo
                                    </Typography>
                                </Grid>
                                <Grid
                                    item xs={2}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    <Button
                                        onClick={handleOpenAddUser}
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#305264",
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
                                            Thêm người dùng
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid
                                    item xs={2}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    <Button
                                        onClick={handleOpenDeleteUser}
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#305264",
                                            borderRadius: 4,
                                        }}
                                    >
                                        <DeleteIcon style={{color: 'white'}}/>
                                        <Typography
                                            paddingLeft={1}
                                            className={"sign-in"}
                                            fontSize={20}
                                            fontWeight={500}
                                        >
                                            Xóa người dùng
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid
                                    item xs={1.25}
                                    display="flex"
                                    justifyContent="flex-end"
                                >
                                    <Button
                                        onClick={handleOpenDeleteClass}
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#305264",
                                            borderRadius: 4,
                                        }}
                                    >
                                        <DeleteIcon style={{color: 'white'}}/>
                                        <Typography
                                            paddingLeft={1}
                                            className={"sign-in"}
                                            fontSize={20}
                                            fontWeight={500}
                                        >
                                            Xóa lớp
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <Modal
                            open={openAddUser}
                            onClose={handleCloseAddUser}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <AdminAddUser/>
                        </Modal>

                        <Modal
                            open={openDeleteUser}
                            onClose={handleCloseDeleteUser}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <AdminDeleteUser/>
                        </Modal>

                        <Modal
                            open={openDeleteClass}
                            onClose={handleCloseDeleteClass}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <AdminDeleteClass/>
                        </Modal>
                    </Container>
                </Header>
            ) : null}
        </ThemeProvider>
    )
}

export default AdminDashboard;