import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import {
    Box, Button,
    Card, CardActions,
    CardContent,
    Container,
    createTheme,
    Grid, Modal,
    ThemeProvider,
    Typography
} from "@mui/material";
import Header from "../../components/Header/header";
import AdminNavBar from "../../components/AdminNavBar/adminNavBar";
import AdminService from "../../services/admin.service";
import TeacherDeleteClass from "../../components/TeacherDeleteClass/teacherDeleteClass";

const AdminClasses = () => {
    const navigate = useNavigate();

    const [openAdminDeleteClass, setOpenAdminDeleteClass] = useState(false)
    const handleOpenAdminDeleteClass = () => setOpenAdminDeleteClass(true);
    const handleCloseAdminDeleteClass = () => setOpenAdminDeleteClass(false);

    const [deleteClassID, setDeleteClassID] = useState()

    const [refreshState, setRefreshState] = useState(false)
    const handleRefresh = () => setRefreshState(current => !current)

    const [classes, setClasses] = useState()

    const getClass = () => {
        AdminService.getAllClass().then((listClass) => {
            const classArr = [];
            for (let i = 0; i < listClass.data.message.length; i++) {
                if (listClass.data.message[i].DeletedAt == null) {
                    classArr.push(listClass.data.message[i]);
                }
            }
            setClasses(classArr);
        })
    };

    useEffect(() => {
        AuthService.isAdmin(navigate)
        const fetchData = async () => {
            await getClass();
        };
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshState]);

    const theme = createTheme({
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Header>
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        paddingLeft: 8,
                        paddingRight: 15,
                    }}
                >
                    <AdminNavBar handleRefresh={handleRefresh}/>
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
                            {classes?.map((classes) => (
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
                                                {classes.ClassName}
                                            </Typography>
                                            <Typography>{classes.Description}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size={"small"}
                                                color={"primary"}
                                                onClick={() => {
                                                    handleOpenAdminDeleteClass();
                                                    setDeleteClassID(classes.ID);
                                                }}
                                            >
                                                Xóa lớp
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Modal
                        open={openAdminDeleteClass}
                        onClose={handleCloseAdminDeleteClass}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <TeacherDeleteClass
                            handleRefresh={handleRefresh}
                            handleCloseTeacherDeleteClass={handleCloseAdminDeleteClass}
                            deleteClassID={deleteClassID}
                        />
                    </Modal>
                </Container>
            </Header>
        </ThemeProvider>
    )
}

export default AdminClasses;