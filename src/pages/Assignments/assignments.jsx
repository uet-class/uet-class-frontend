import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import "./assignments.css";
import ClassHeader from "../../components/ClassHeader/classHeader";
import ArticleIcon from "@mui/icons-material/Article";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SubmitAssignmentForm from "../../components/submitAssignmentForm/submitAssignmentForm";
import { Button, Typography, Box, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateAssignmentForm from "../../components/createAssignmentForm/createAssignmentForm";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import AssignmentService from "../../services/assignment.service";
import UploadAttachmentAssignment from "../../components/UploadAttachmentAssignment/uploadAttachmentAssignment";
// import UserService from "../../services/user.service";
import ClassService from "../../services/class.service";

const columns = [
  { id: "name", label: "Bài tập", minWidth: 300 },
  { id: "updateDate", label: "Ngày đăng tải", minWidth: 300 },
  { id: "deadlineDate", label: "Hạn nộp", minWidth: 100 },
  { id: "status", label: "Trạng thái", minWidth: 100 },
];

function createData(name, updateDate, deadlineDate, id, status, info) {
  return { name, updateDate, deadlineDate, id, info, status };
}

const Assignments = () => {
  const [openSubmitAssignment, setSubmitAssignment] = useState(false);
  const handleCloseSubmitAssignment = () => setSubmitAssignment(false);
  const handleOpenSubmitAssignment = () => setSubmitAssignment(true);
  const [openCreateAssignment, setCreateAssignment] = useState(false);
  const handleCloseCreateAssignment = () => setCreateAssignment(false);
  const handleOpenCreateAssignment = () => setCreateAssignment(true);

  const [openUploadAttachment, setUploadAttachment] = useState(false);
  const handleCloseUploadAttachment = () => setUploadAttachment(false);
  const handleOpenUploadAttachment = () => setUploadAttachment(true);
  const [isTeacher, setIsTeacher] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);
  const handleRefresh = () => {
    setRefreshPage((current) => !current);
  };
  const [rows, setRows] = useState([]);
  const [assigmentInfo, setAssignmentInfo] = useState();

  const navigate = useNavigate();

  //hardcode for classID
  let classID = localStorage.getItem("classID");
  let userID = localStorage.getItem("userId");

  useEffect(() => {
    AuthService.isUser(navigate);

    const fetchData = async () => {
      await ClassService.memberClass(classID).then((info) => {
        const teachers = info.data.message.Teachers;
        if (
          userID.toString() === teachers[0].ID.toString() &&
          isTeacher !== true
        ) {
          setIsTeacher(true);
        } else {
          AssignmentService.listAssignment(classID).then((res) => {
            setRows([]);
            for (let i = 0; i < res.data.message.length; i++) {
              AssignmentService.checkUserSubmission(
                classID,
                res.data.message[i].ID,
                userID
              ).then((response) => {
                setRows((rows) => [
                  ...rows,
                  createData(
                    res.data.message[i].Title,
                    res.data.message[i].CreatedAt,
                    res.data.message[i].Duedate,
                    res.data.message[i].ID,
                    response,
                    res.data.message[i]
                  ),
                ]);
                setRows((rows) =>
                  rows.sort(
                    (a, b) =>
                      Date.parse(a.updateDate) - Date.parse(b.updateDate)
                  )
                );
              });
            }
          });
        }
      });
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPage, isTeacher]);

  const assignmentStatus = (done) => {
    if (done === true) {
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

  // const handleDelete = (a) => {
  //   console.log(a);
  // };

  return (
    <DashbroadLayout>
      <ClassHeader>
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
              <AddIcon style={{ color: "white" }} />
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
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ height: 550 }}>
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
                      {/* {isTeacher && (
                        <TableCell style={{ width: 3 }}></TableCell>
                      )} */}
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
                            setAssignmentInfo(row.info);
                            if (!isTeacher) {
                              handleOpenSubmitAssignment();
                            } else {
                              handleOpenUploadAttachment();
                            }
                          }}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            if (!(column.id === "status" && isTeacher)) {
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
                                  {column.id === "status"
                                    ? assignmentStatus(row.status)
                                    : column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            }
                            return <></>;
                          })}
                          {/* {isTeacher && (
                            <TableCell>
                              <Button
                                sx={{ width: 3 }}
                                onClick={() => {
                                  handleDelete(row.id);
                                }}
                              >
                                <DeleteIcon style={{ color: "red" }} />
                              </Button>
                            </TableCell>
                          )} */}
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
              <SubmitAssignmentForm
                info={assigmentInfo}
                handleCloseSubmitAssignment={handleCloseSubmitAssignment}
                handleRefresh={handleRefresh}
              />
            </Box>
          </Modal>
          <Modal
            open={openCreateAssignment}
            onClose={handleCloseCreateAssignment}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <CreateAssignmentForm
                handleCloseCreateAssignment={handleCloseCreateAssignment}
                handleRefresh={handleRefresh}
              />
            </Box>
          </Modal>

          <Modal
            open={openUploadAttachment}
            onClose={handleCloseUploadAttachment}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <UploadAttachmentAssignment
                handleCloseUploadAttachment={handleCloseUploadAttachment}
                handleRefresh={handleRefresh}
                info={assigmentInfo}
              />
            </Box>
          </Modal>
        </div>
      </ClassHeader>
    </DashbroadLayout>
  );
};

export default Assignments;
