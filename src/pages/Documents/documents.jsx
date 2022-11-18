import "./documents.css";
import { Button, Typography, Box, Modal } from "@mui/material";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";
import ClassHeader from "../../components/ClassHeader/classHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CreateDocuments from "../../components/createDocuments/createDocuments";

const columns = [
  { id: "name", label: "Tên tài liệu", minWidth: 220 },
  { id: "updateDate", label: "Ngày đăng tải", minWidth: 100 },
];

function createData(name, updateDate, link, id) {
  return { name, updateDate, link, id };
}

const rows = [
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    1
  ),
];

const Documents = () => {
  const [openCreateDocument, setOpenCreateDocument] = useState(false);
  const handleOpenCreateDocument = () => setOpenCreateDocument(true);
  const handleCloseCreateDocument = () => setOpenCreateDocument(false);
  const [isTeacher, setIsTeacher] = useState(false);

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
    <HomeIcon />,
    <NewsIcon />,
    <DocumentIcon />,
    <HomeworkIcon />,
    <OtherIcon />,
  ];

  const handleDelete = (a) => {
    console.log(a);
  };

  const handleDownload = (a) => {
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
              onClick={handleOpenCreateDocument}
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
                      <TableCell style={{ width: 3 }}></TableCell>
                      {isTeacher && (
                        <TableCell style={{ width: 3 }}></TableCell>
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
                        >
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
                          <TableCell style={{ width: 3 }}>
                            <Button
                              sx={{ width: 3 }}
                              onClick={() => {
                                handleDownload(row.link);
                              }}
                            >
                              <DownloadIcon style={{ color: "blue" }} />
                            </Button>
                          </TableCell>
                          {isTeacher && (
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
            open={openCreateDocument}
            onClose={handleCloseCreateDocument}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <CreateDocuments />
            </Box>
          </Modal>
        </div>
      </ClassHeader>
    </DashbroadLayout>
  );
};

export default Documents;
