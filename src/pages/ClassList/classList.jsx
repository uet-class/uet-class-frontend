import "./classList.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import ClassHeader from "../../components/ClassHeader/classHeader";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Avatar,
  Modal,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import AddMemberClassForm from "../../components/AddMemberClassForm/addMemberClassForm";
import ClassService from "../../services/class.service";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CreateReportUserForm from "../../components/CreateReportUserForm/createReportUserForm";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";



const columns = [
  { id: "FullName", label: "", minWidth: 220 },
  { id: "DateOfBirth", label: "", minWidth: 220 },
];

function createData(FullName, DateOfBirth, isTeacher, UserInfo) {
  return { FullName, DateOfBirth, isTeacher, UserInfo };
}

const ClassList = () => {
  const navigate = useNavigate();
  const [refreshPage, setRefreshPage] = useState(false);
  const [userInfoDelete, setUserInfoDelete] = useState();
  const [userInfoReport, setUserInfoReport] = useState();
  const [rows, setRows] = useState([]);
  const [addMemberClass, setAddMemberClass] = useState(false);
  const handleCloseAddMemberClass = () => setAddMemberClass(false);
  const handleOpenAddMemeberClass = () => setAddMemberClass(true);
  const [reportMemberClass, setReportMemberClass] = useState(false);
  const handleCloseReportMemberClass = () => setReportMemberClass(false);
  const handleOpenReportMemeberClass = () => setReportMemberClass(true);
  const [isTeacher, setIsTeacher] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  
  let classId = localStorage.getItem("classID");
  let userID = localStorage.getItem("userId");

  const handleRefreshPage = () => {
    setRefreshPage((prev) => !prev);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = (info) => {
    console.log(userInfoDelete);
    setUserInfoDelete(info);
    setOpenDialog(true);
  };

  const handleDeleteMember = () => {
    // console.log(userInfoDelete);
    ClassService.removeMember(classId, userInfoDelete.Email).then(() => {
      handleRefreshPage();
    });
    handleCloseDialog();
  };

  const handleReportMember = (userInfo) => {
    setUserInfoReport(userInfo);
    handleOpenReportMemeberClass();
  };

  useEffect(() => {
    AuthService.isUser(navigate);
    const fetchData = async () => {
      await ClassService.memberClass(classId).then((info) => {
        const students = info.data.message.Students;
        const teachers = info.data.message.Teachers;
        if (
          userID.toString() === teachers[0].ID.toString() &&
          isTeacher !== true
        ) {
          setIsTeacher(true);
        } else {
          setRows([]);
          console.log(teachers[0]);

          for (let i = 0; i < teachers.length; i++) {
            setRows((rows) => [
              ...rows,
              createData(
                teachers[i].FullName,
                teachers[i].DateOfBirth,
                true,
                teachers[i]
              ),
            ]);
          }
          for (let i = 0; i < students.length; i++) {
            setRows((rows) => [
              ...rows,
              createData(
                students[i].FullName,
                students[i].DateOfBirth,
                false,
                students[i]
              ),
            ]);
          }
        }
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPage, isTeacher]);


  const handleAddPeople = () => {
    handleOpenAddMemeberClass();
  };


  return (
    <DashbroadLayout>
      <ClassHeader>
        <div className="dataTable">
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              paddingLeft: 1,
              paddingRight: 3,
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "black",
                paddingTop: 3,
                paddingBottom: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography fontSize={28} fontWeight={600} color="#0A5379">
                Thành viên
              </Typography>
              {isTeacher && (
                <PersonAddAlt1Icon
                  sx={{
                    color: "#0A5379",
                    height: "35px",
                    width: "35px",
                    cursor: "pointer",
                  }}
                  onClick={handleAddPeople}
                />
              )}
            </Box>
            <Box>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ height: 610 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ width: 3 }}></TableCell>
                        {columns.map((column) => (
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
                        ))}
                        <TableCell></TableCell>
                        <TableCell style={{ width: 100 }}></TableCell>
                        <TableCell style={{ width: 100 }}></TableCell>
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
                          >
                            <TableCell style={{ width: 3 }}>
                              <Avatar
                                alt="Remy Sharp"
                                src={row.UserInfo.AvatarUrl}
                                sx={{
                                  height: "45px",
                                  width: "45px",
                                }}
                              />
                            </TableCell>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ fontSize: "17px" }}
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
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                            <TableCell>
                              {row.isTeacher ? (
                                <Typography
                                  paddingLeft={1}
                                  className={"sign-in"}
                                  fontSize={17}
                                  fontWeight={600}
                                  color={"#47A59F"}
                                >
                                  Giảng viên
                                </Typography>
                              ) : (
                                <Typography
                                  paddingLeft={1}
                                  className={"sign-in"}
                                  fontSize={17}
                                  fontWeight={600}
                                  color={"#0A5379"}
                                >
                                  Học viên
                                </Typography>
                              )}
                            </TableCell>
                            <TableCell>
                              <Button sx={{ width: 3 }}>
                                <ReportProblemIcon
                                  style={{ color: "#0A5379" }}
                                  onClick={() => {
                                    handleReportMember(row.UserInfo);
                                  }}
                                />
                              </Button>
                            </TableCell>
                            <TableCell>
                              {isTeacher && (
                                <Button sx={{ width: 3 }}>
                                  <DeleteIcon
                                    style={{ color: "red" }}
                                    onClick={() => {
                                      handleOpenDialog(row.UserInfo);
                                    }}
                                  />
                                </Button>
                              )}{" "}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Container>
          <Modal
            open={addMemberClass}
            onClose={handleCloseAddMemberClass}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <AddMemberClassForm
                handleCloseAddMemberClass={handleCloseAddMemberClass}
              />
            </Box>
          </Modal>
          <Modal
            open={reportMemberClass}
            onClose={handleCloseReportMemberClass}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <CreateReportUserForm
                handleCloseReportMemberClass={handleCloseReportMemberClass}
                userInfoReport={userInfoReport}
              />
            </Box>
          </Modal>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {`Bạn muốn xóa người dùng "${
                userInfoDelete ? userInfoDelete.FullName : ""
              }" ra khỏi lớp?`}
            </DialogTitle>
            <DialogActions>
              <Button
                type="submit"
                variant="contained"
                onClick={handleCloseDialog}
                sx={{
                  backgroundColor: "#1967D2",
                }}
              >
                Hủy
              </Button>
              <Button onClick={handleDeleteMember} autoFocus>
                Xóa
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </ClassHeader>
    </DashbroadLayout>
  );
};

export default ClassList;
