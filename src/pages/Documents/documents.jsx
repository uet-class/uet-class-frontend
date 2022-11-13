import "./documents.css";
import { Button, Typography } from "@mui/material";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";
import ClassHeader from "../../components/ClassHeader/classHeader";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import ArticleIcon from "@mui/icons-material/Article";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Tên tài liệu", minWidth: 220 },
  { id: "updateDate", label: "Ngày đăng tải", minWidth: 100 },
];

function createData(name, updateDate, link) {
  return { name, updateDate, link };
}

const rows = [
  createData(
    "bai1.pdf",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
  createData(
    "bai1",
    "23/10/2012",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ),
];

const Documents = () => {
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

  return (
    <DashbroadLayout sideBar={sideBar}>
      <ClassHeader className={"Tương tác người máy"} classCode={"INT1234_21"}>
        <div className="section">
          <Button
            // onClick={handleOpenJoinClass}
            variant="contained"
            sx={{
              backgroundColor: "#0A5379",
              borderRadius: 5,
              marginLeft: 1.4,
              height: 50,
              width: 160,
              marginTop: 2,
            }}
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
                            // backgroundColor: "#D3D3D3",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                      <TableCell
                        style={{ width: 3, }}
                      ></TableCell>
                      <TableCell
                        style={{ width: 3,}}
                      ></TableCell>
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
                                {column.id == "name" && (
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
                            <Button sx={{ width: 3 }}>
                              <DownloadIcon style={{ color: "blue" }} />
                            </Button>
                          </TableCell>

                          <TableCell>
                            <Button sx={{ width: 3 }}>
                              <DeleteIcon style={{ color: "red" }} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
      </ClassHeader>
    </DashbroadLayout>
  );
};

export default Documents;
