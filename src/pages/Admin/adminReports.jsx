import {
    Box,
    Button,
    Card, CardActions, CardContent,
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
import ReportContent from "../../components/ReportContent/reportContent";
import ReportService from "../../services/report.service";
import AdminNavBar from "../../components/AdminNavBar/adminNavBar";

const AdminReports = () => {
    const navigate = useNavigate();

    const [openReportContent, setOpenReportContent] = useState(false)
    const handleOpenReportContent = () => setOpenReportContent(true);
    const handleCloseReportContent = () => setOpenReportContent(false);

    const [reporterID, setReporterID] = useState()
    const [reportMessage, setReportMessage] = useState()

    const [refreshState, setRefreshState] = useState(false)
    const handleRefresh = () => setRefreshState(current => !current)

    const [reports, setReports] = useState()

    const getReport = () => {
        ReportService.getReports().then((listReports) => {
            const reportArr = [];
            for (let i = 0; i < listReports.data.message.length; i++) {
                if (listReports.data.message[i].DeletedAt == null) {
                    reportArr.push(listReports.data.message[i]);
                }
            }
            setReports(reportArr);
        });
    };

    useEffect(() => {
        AuthService.isAdmin(navigate)
        const fetchData = async () => {
            await getReport();
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
                            {reports?.map((report) => (
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
                                                Báo cáo số {report.ID}
                                            </Typography>
                                            <Typography>
                                                Báo cáo của người dùng {report.ReporterID}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size={"small"}
                                                color={"primary"}
                                                onClick={() => {
                                                    handleOpenReportContent();
                                                    setReporterID(report.ReporterID);
                                                    setReportMessage(report.Message);
                                                }}
                                            >Xem nội dung</Button>
                                            <Button size={"small"} color={"primary"}>Xóa báo cáo</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Modal
                        open={openReportContent}
                        onClose={handleCloseReportContent}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <ReportContent reporterID={reporterID}
                                       reportMessage={reportMessage}
                        />
                    </Modal>
                </Container>
            </Header>
        </ThemeProvider>
    )
}

export default AdminReports;