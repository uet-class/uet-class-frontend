import "./documents.css";
import { Button, Typography, Modal } from "@mui/material";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import AddIcon from "@mui/icons-material/Add";
import ClassHeader from "../../components/ClassHeader/classHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import ArticleIcon from "@mui/icons-material/Article";
import { useState, useEffect } from "react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CreateDocuments from "../../components/createDocuments/createDocumentsForm";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import ClassService from "../../services/class.service";

const columns = [
  { id: "name", label: "Tên tài liệu", minWidth: 220 },
  { id: "updateDate", label: "Ngày đăng tải", minWidth: 100 },
];

// const {Storage} = require('@google-cloud/storage');
// const storage = new Storage();

function createData(name, updateDate) {
  return { name, updateDate };
}

const Documents = () => {
  const [openCreateDocument, setOpenCreateDocument] = useState(false);
  const handleOpenCreateDocument = () => setOpenCreateDocument(true);
  const handleCloseCreateDocument = () => setOpenCreateDocument(false);
  const isTeacher = true; //tam thoi
  const [refreshPage, setRefreshPage] = useState(false);
  const handleRefresh = () => {
    setRefreshPage((current) => !current);
  };
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  let classID = localStorage.getItem("classID");

  useEffect(() => {
    AuthService.isUser(navigate);
    ClassService.listClassMaterials(classID).then((res) => {
      console.log(res.data.message.files);
      setRows([]);
      for (let i = 0; i < res.data.message.files.length; i++) {
        setRows((rows) => [
          ...rows,
          createData(res.data.message.files[i], "23/10/2012"),
        ]);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPage]);

  const handleDelete = (fileName) => {
    console.log(fileName);
    ClassService.deleteClassMaterial(classID, fileName).then(() => {
      handleRefresh();
    });
  };

  const handleDownload = (fileName) => {
    console.log(fileName);
    // storage.bucket('uc-class-27').file("text.txt").download();
  };

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
                                handleDownload(row.name);
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
                                  handleDelete(row.name);
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
          {isTeacher && (
            <Modal
              open={openCreateDocument}
              onClose={handleCloseCreateDocument}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                borderRadius: "25px",
              }}
            >
              {/* <Box
                sx={{
                  borderRadius: "25px",
                }}
              > */}
              <CreateDocuments
                handleRefresh={handleRefresh}
                handleCloseCreateDocument={handleCloseCreateDocument}
              />
              {/* </Box> */}
            </Modal>
          )}
        </div>
      </ClassHeader>
    </DashbroadLayout>
  );
};

export default Documents;
