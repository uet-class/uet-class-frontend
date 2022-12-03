import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import "./assignments.css";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";
import ClassHeader from "../../components/ClassHeader/classHeader";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState, useEffect} from "react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SubmitAssignmentForm from "../../components/submitAssignmentForm/submitAssignmentForm";
import {Button, Typography, Box, Modal} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateAssignmentForm from "../../components/createAssignmentForm/createAssignmentForm";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";

const columns = [
    {id: "name", label: "Bài tập", minWidth: 300},
    {id: "updateDate", label: "Ngày đăng tải", minWidth: 300},
    {id: "deadlineDate", label: "Hạn nộp", minWidth: 100},
    {id: "status", label: "Trạng thái", minWidth: 100},
];

function createData(name, updateDate, deadlineDate, id) {
    return {name, updateDate, deadlineDate, id};
}

const rows = [
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
    createData("bai1 Gioi thieu", "20/11/2022", "25/11/2022", 1),
];

const Assignments = () => {
    const [openSubmitAssignment, setSubmitAssignment] = useState(false);
    const handleCloseSubmitAssignment = () => setSubmitAssignment(false);
    const handleOpenSubmitAssignment = () => setSubmitAssignment(true);
    const [openCreateAssignment, setCreateAssignment] = useState(false);
    const handleCloseCreateAssignment = () => setCreateAssignment(false);
    const handleOpenCreateAssignment = () => setCreateAssignment(true);
    const isTeacher = false; //tam thoi

    const navigate = useNavigate();

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
        <HomeIcon/>,
        <NewsIcon/>,
        <DocumentIcon/>,
        <HomeworkIcon/>,
        <OtherIcon/>,
    ];

    useEffect(() => {
        AuthService.isUser(navigate)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const assignmentStatus = (done) => {
        if (done) {
            return (
                <Typography
                    paddingLeft={1}
                    className={"sign-in"}
                    fontSize={17}
                    fontWeight={600}
                    color={"green"}
                >
                    Đã nộp
                </Typography>
            );
        }
        return (
            <Typography
                paddingLeft={1}
                className={"sign-in"}
                fontSize={17}
                fontWeight={600}
                color={"red"}
            >
                Chưa nộp
            </Typography>
        );
    };

    const handleDelete = (a) => {
        console.log(a);
    };

    return (
        <DashbroadLayout sideBar={sideBar}>
            <ClassHeader className={"Tương tác người máy"} classCode={"INT1234_21"}>
                <div className="section">
                    {isTeacher && (
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#0A5379",
                                borderRadius: 5,
                                marginLeft: 1.4,
                                height: 50,
                                width: 160,
                                marginTop: 2,
                            }}
                            onClick={handleOpenCreateAssignment}
                        >
                            <AddIcon style={{color: "white"}}/>
                            <Typography
                                paddingLeft={1}
                                className={"sign-in"}
                                fontSize={20}
                                fontWeight={500}
                            >
                                Tạo mới
                            </Typography>
                        </Button>
                    )}
                    <div className="dataTable">
                        <Paper sx={{width: "100%", overflow: "hidden"}}>
                            <TableContainer sx={{height: 550}}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => {
                                                if (!(column.id === "status" && isTeacher)) {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{
                                                                minWidth: column.minWidth,
                                                                fontWeight: "600",
                                                                fontSize: "18px",
                                                            }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    );
                                                }
                                                return <></>;
                                            })}
                                            {isTeacher && (
                                                <TableCell style={{width: 3}}></TableCell>
                                            )}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.code}
                                                    onClick={() => {
                                                        if (!isTeacher) {
                                                            handleOpenSubmitAssignment()
                                                        }
                                                    }}
                                                    sx={{
                                                        ...(!isTeacher && {cursor: "pointer",})
                                                    }}
                                                >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        if (!(column.id === "status" && isTeacher)) {
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    align={column.align}
                                                                    style={{fontSize: "17px"}}
                                                                >
                                                                    {column.id === "name" && (
                                                                        <ArticleIcon
                                                                            style={{
                                                                                color: "#464646",
                                                                                marginRight: "6px",
                                                                                height: "40px",
                                                                                width: "40px",
                                                                            }}
                                                                        />
                                                                    )}
                                                                    {column.id === "status"
                                                                        ? assignmentStatus(
                                                                            !Math.round(Math.random())
                                                                        )
                                                                        : column.format && typeof value === "number"
                                                                            ? column.format(value)
                                                                            : value}
                                                                </TableCell>
                                                            );
                                                        }
                                                        return <></>;
                                                    })}
                                                    {isTeacher && (
                                                        <TableCell>
                                                            <Button
                                                                sx={{width: 3}}
                                                                onClick={() => {
                                                                    handleDelete(row.id);
                                                                }}
                                                            >
                                                                <DeleteIcon style={{color: "red"}}/>
                                                            </Button>
                                                        </TableCell>
                                                    )}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                    <Modal
                        open={openSubmitAssignment}
                        onClose={handleCloseSubmitAssignment}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box>
                            <SubmitAssignmentForm/>
                        </Box>
                    </Modal>
                    <Modal
                        open={openCreateAssignment}
                        onClose={handleCloseCreateAssignment}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box>
                            <CreateAssignmentForm/>
                        </Box>
                    </Modal>
                </div>
            </ClassHeader>
        </DashbroadLayout>
    );
};

export default Assignments;