import {
    Box,
    Button,
    Card, CardActions, CardContent,
    Container,
    Grid,
    Modal,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";
import Header from "../../components/Header/header";
import {useNavigate} from "react-router-dom";
import ReportContent from "../../components/ReportContent/reportContent";
import ReportService from "../../services/report.service";
import AdminNavBar from "../../components/AdminNavBar/adminNavBar";
import AdminDeleteReport from "../../components/AdminDeleteReport/adminDeleteReport";

const AdminReports = () => {
    const navigate = useNavigate();

    const [openReportContent, setOpenReportContent] = useState(false)
    const handleOpenReportContent = () => setOpenReportContent(true);
    const handleCloseReportContent = () => setOpenReportContent(false);

    const [openDeleteReport, setOpenDeleteReport] = useState(false);
    const handleOpenDeleteReport = () => setOpenDeleteReport(true);
    const handleCloseDeleteReport = () => setOpenDeleteReport(false);
    const [reportID, setReportID] = useState()

    const [reporterID, setReporterID] = useState()
    const [reportMessage, setReportMessage] = useState()

    const [refreshState, setRefreshState] = useState(false)
    const handleRefresh = () => setRefreshState(current => !current)

    const [reports, setReports] = useState()
    const [reporterEmail, setReporterEmail] = useState()
    const [reportObjectContact, setReportObjectContact] = useState()

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

    return (
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
                                        height: "98%",
                                        display: "flex",
                                        flexDirection: "column",
                                        minWidth: 310,
                                        maxWidth: 310,
                                        backgroundColor: "#FEFEFE"
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
                                        <Typography
                                            sx={{
                                                fontSize: 25,
                                                fontWeight: 550,
                                            }}
                                        >
                                            Báo cáo
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 18,
                                                fontWeight: 550,
                                                paddingTop: 1,
                                            }}
                                        >
                                            Người tạo: {report.ReporterName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Box
                                            sx={{
                                                paddingBottom: 1,
                                            }}
                                        >
                                            <Button
                                                size={"small"}
                                                color={"primary"}
                                                onClick={() => {
                                                    handleOpenReportContent();
                                                    setReporterID(report.ReporterID);
                                                    setReportMessage(report.Message);
                                                    setReporterEmail(report.ReporterEmail);
                                                    setReportObjectContact(report.ReportObjectContact);
                                                }}
                                            >
                                                Xem nội dung
                                            </Button>
                                            <Button
                                                size={"small"}
                                                color={"primary"}
                                                onClick={() => {
                                                    handleOpenDeleteReport();
                                                    setReportID(report.ID);
                                                }}
                                            >
                                                Xóa báo cáo
                                            </Button>
                                        </Box>

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
                                   reportObjectContact={reportObjectContact}
                                   reporterEmail={reporterEmail}
                    />
                </Modal>

                <Modal
                    open={openDeleteReport}
                    onClose={handleCloseDeleteReport}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AdminDeleteReport
                        handleRefresh={handleRefresh}
                        handleCloseDeleteReport={handleCloseDeleteReport}
                        reportID={reportID}
                    />
                </Modal>
            </Container>
        </Header>
    )
}

export default AdminReports;