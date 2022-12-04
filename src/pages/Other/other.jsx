import "./other.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";
import ClassHeader from "../../components/ClassHeader/classHeader";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Avatar,
  Modal,
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
import UserService from "../../services/user.service";
import AddMemberClassForm from "../../components/AddMemberClassForm/addMemberClassForm";

const columns = [
  { id: "FullName", label: "", minWidth: 220 },
  { id: "DateOfBirth", label: "", minWidth: 220 },
];

function createData(FullName, DateOfBirth, isTeacher, UserInfo) {
  return { FullName, DateOfBirth, isTeacher, UserInfo };
}
// const rows = [
//   createData(
//     "bai1.pdf",
//     "23/10/2012",
//     "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     1
//   ),

// ];

const Other = () => {
  const isTeacher = true; //tam thoi
  // const [refreshPage, setRefreshPage] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [rows, setRows] = useState([]);

  const [addMemberClass, setAddMemberClass] = useState(false);
  const handleCloseAddMemberClass = () => setAddMemberClass(false);
  const handleOpenAddMemeberClass = () => setAddMemberClass(true);

  const handleDeleteMember = (id) => {
    console.log(id)
  }

  useEffect(() => {
    const fetchData = async () => {
      await UserService.getUserInfo().then((info) => {
        console.log(userInfo);
        setUserInfo(info);
        setRows([]);
        for (let i = 0; i < 3; i++) {
          setRows((rows) => [
            ...rows,
            createData(info.FullName, info.DateOfBirth, true, info),
          ]);
        }
        for (let i = 0; i < 20; i++) {
          setRows((rows) => [
            ...rows,
            createData(info.FullName, info.DateOfBirth, false, info),
          ]);
        }
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  //hardcode for class id
  let classID = localStorage.getItem("classID");

  var sideBar = {};
  sideBar.classLinks = ["/home", "/assignments"];
  sideBar.classes = ["Tương tác người máy", "Xác suất thống kê"];
  sideBar.basicLink = [
    "/home",
    `/class/${classID}/posts`,
    `/class/${classID}/documents`,
    `/class/${classID}/assignments`,
    `/class/${classID}/other`,
  ];
  sideBar.basicLinkName = [
    "Trang chủ",
    "Bảng tin",
    "Tài liệu",
    "Bài tập",
    "Khác",
  ];
  sideBar.basicIcon = [
    <HomeIcon />,
    <NewsIcon />,
    <DocumentIcon />,
    <HomeworkIcon />,
    <OtherIcon />,
  ];

  const handleAddPeople = () => {
    // setRefreshPage((prev) => !prev);
    handleOpenAddMemeberClass()
  };

  return (
    <DashbroadLayout sideBar={sideBar}>
      <ClassHeader className={"Tương tác người máy"} classCode={"INT1234_21"}>
        <div className="dataTable">
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              paddingLeft: 1,
              paddingRight: 3,
              // backgroundColor: 'yellow'
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
              <Typography fontSize={28} fontWeight={600} color="#1967D2">
                Thành viên
              </Typography>
              {isTeacher && (
                <PersonAddAlt1Icon
                  sx={{
                    color: "blue",
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
                <TableContainer sx={{ height: 590 }}>
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
                                src="https://i.insider.com/61135525ad63f30019501966?width=700"
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
                                  color={"#E5810B"}
                                >
                                  Giảng viên
                                </Typography>
                              ) : (
                                <Typography
                                  paddingLeft={1}
                                  className={"sign-in"}
                                  fontSize={17}
                                  fontWeight={600}
                                  color={"#47A59F"}
                                >
                                  Học viên
                                </Typography>
                              )}
                            </TableCell>
                            <TableCell>
                              {isTeacher && (
                                <Button
                                  sx={{ width: 3 }}
                                  //   onClick={() => {
                                  //     handleDelete(row.id);
                                  //   }}
                                >
                                  <DeleteIcon style={{ color: "red" }} onClick={() => {handleDeleteMember(row.UserInfo.ID)}}/>
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
              <AddMemberClassForm />
            </Box>
          </Modal>
        </div>
      </ClassHeader>
    </DashbroadLayout>
  );
};

export default Other;
