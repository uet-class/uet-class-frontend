import Header from "../../components/Header/header";
import {Box, Button, Container, createTheme, Grid, Modal, ThemeProvider, Typography} from "@mui/material";
import "./home.css"
import React from "react";
import AddIcon from '@mui/icons-material/Add';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Home = () => {
    const [openCreateClass, setOpenCreateClass] = React.useState(false);
    const handleOpenCreateClass = () => setOpenCreateClass(true);
    const handleCloseCreateClass = () => setOpenCreateClass(false);

    const [openJoinClass, setOpenJoinClass] = React.useState(false);
    const handleOpenJoinClass = () => setOpenJoinClass(true);
    const handleCloseJoinClass = () => setOpenJoinClass(false);

    const theme = createTheme({
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Header/>
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
                                Lớp học của bạn
                            </Typography>
                        </Grid>
                        <Grid
                            item xs={4}
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
                                <AddIcon style={{ color: 'white' }} />
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
                            item xs={2}
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
                                <AddIcon style={{ color: 'white' }} />
                                <Typography
                                    paddingLeft={1}
                                    className={"sign-in"}
                                    fontSize={20}
                                    fontWeight={500}
                                >
                                    Tham gia vào lớp
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Modal
                open={openCreateClass}
                onClose={handleCloseCreateClass}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Tiêu đề cho tạo lớp
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Đây là modal tạo lớp.
                    </Typography>
                </Box>
            </Modal>

            <Modal
                open={openJoinClass}
                onClose={handleCloseJoinClass}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Tiêu đề tham gia lớp
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Đây là modal tham gia vào lớp.
                    </Typography>
                </Box>
            </Modal>
        </ThemeProvider>
    )
}

export default Home;