import {
    Box,
    Button,
    Card, CardActions, CardContent,
    CardMedia,
    Container,
    createTheme,
    Grid,
    Modal,
    ThemeProvider,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";
import Header from "../../components/Header/header";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AdminAddUser from "../../components/AdminAddUser/adminAddUser";
import AdminDeleteUser from "../../components/AdminDeleteUser/adminDeleteUser";
import AdminDeleteClass from "../../components/AdminDeleteClass/adminDeleteClass";
import ReportContent from "../../components/ReportContent/reportContent";

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

    const [openReportContent, setOpenReportContent] = useState(false)
    const handleOpenReportContent = () => setOpenReportContent(true);
    const handleCloseReportContent = () => setOpenReportContent(false);

    const reports = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
    },);

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

                        <Box
                            sx={{
                                paddingTop: 5,
                            }}
                        >
                            <Grid
                                container spacing={4}
                                sx={{
                                    maxHeight: '78vh',
                                    overflow: 'auto'
                                }}
                            >
                                {reports.map((n) => (
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
                                            <CardMedia
                                                image="https://source.unsplash.com/random"
                                                title="Image title"
                                                sx={{
                                                    paddingTop: "56.25%"
                                                }}
                                            />
                                            <CardContent
                                                sx={{
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <Typography variant={"h5"}>
                                                    Báo cáo số {n}
                                                </Typography>
                                                <Typography>
                                                    Báo cáo của người dùng Phạm Vũ Minh
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    size={"small"}
                                                    color={"primary"}
                                                    onClick={handleOpenReportContent}
                                                >Xem nội dung</Button>
                                                <Button size={"small"} color={"primary"}>Xóa báo cáo</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
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

                        <Modal
                            open={openReportContent}
                            onClose={handleCloseReportContent}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <ReportContent />
                        </Modal>
                    </Container>
                </Header>
            ) : null}
        </ThemeProvider>
    )
}

export default AdminDashboard;