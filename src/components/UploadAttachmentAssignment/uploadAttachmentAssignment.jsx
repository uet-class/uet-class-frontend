import "./uploadAttachmentAssignment.css";
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";
import ClassService from "../../services/class.service";
import Submission from "../Submission/submission";
import AssignmentService from "../../services/assignment.service";
import Attachment from "../Attachment/attachment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  paddingBottom: 2,
  borderRadius: "25px",
};

const UploadAttachmentAssignment = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadAttachmentFail, setUploadAttachmentFail] = useState(false);
  const [submissionFiles, setSubmissionFiles] = useState();
  const [assignmentFiles, setAssignmentFiles] = useState();
  let classID = localStorage.getItem("classID");

  useEffect(() => {
    AssignmentService.getClassSubmission(classID, props.info.ID).then((res) => {
      setSubmissionFiles(res.data.message);
    });
    AssignmentService.getAssignment(classID, props.info.ID).then((res) => {
      setAssignmentFiles([]);
      for (let i = 0; i < res.data.message.UploadFile.length; i++) {
        if (res.data.message.UploadFile[i].fileName.split("/").length === 2) {
          setAssignmentFiles((files) => [
            ...files,
            res.data.message.UploadFile[i],
          ]);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var formData = new FormData();
  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.append("file", selectedFile);
    ClassService.uploadAssignmentAttachment(
      props.info.ID,
      props.info.ClassID,
      props.info.CreatorID,
      formData
    )
      .then((res) => {
        if (res.status === 200) {
          props.handleRefresh();
          props.handleCloseUploadAttachment();
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        setUploadAttachmentFail(true);
      });
  };

  const handleFileInput = (e) => {
    // console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  return (
    <Box sx={style}>
      <Container
        maxWidth={false}
        disableGutters
        sx={
          {
            // paddingLeft: 8,
            // paddingRight: 15,
            // backgroundColor: 'yellow'
          }
        }
      >
        {uploadAttachmentFail ? (
          <Alert severity="error">Thêm tệp đính kèm thất bại</Alert>
        ) : null}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "black",
            paddingTop: 3,
            paddingBottom: 1,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography fontSize={32} fontWeight={600} color="black">
                <ArticleIcon
                  style={{
                    color: "#464646",
                    marginRight: "6px",
                    marginBottom: "5px",
                    height: "40px",
                    width: "40px",
                  }}
                />
                {props.info?.Title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="flex-end"
              sx={{
                // backgroundColor: "blue",
                display: "flex",
                alignItems: "end",
              }}
            >
              <Typography
                className={"your-class"}
                fontSize={20}
                fontWeight={600}
                color="black"
                // backgroundColor="yellow"
                display="flex"
                height={30}
              >
                Hạn cuối ngày {props.info?.Duedate}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            // borderBottom: 1,
            // backgroundColor: "blue",
            paddingTop: 3,
            paddingBottom: 1,
          }}
        >
          <Grid container>
            <Grid item xs={8.2}>
              <Box
                sx={{
                  // borderBottom: 1,
                  borderColor: "black",
                  paddingTop: 3,
                  paddingBottom: 5,
                }}
              >
                <Paper
                  style={{
                    padding: "10px 20px",
                    maxHeight: "250px",
                    overflow: "auto",
                    boxShadow: "none",
                  }}
                >
                  <Typography fontSize={20} fontWeight={100} color="black">
                    {props.info?.Content}
                  </Typography>
                  <Grid container maxWidth={"100%"} spacing={2}>
                    {assignmentFiles?.map((file) => (
                      <Grid
                        item
                        xs={6}
                        sx={{
                          height: 70,
                          marginTop: 2,
                        }}
                      >
                        <Attachment info={file} />
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>
              <Box
                sx={{
                  borderTop: 1,
                  borderColor: "black",
                  paddingTop: 3,
                  paddingBottom: 5,
                  // maxHeight: "100%",
                }}
              >
                <Typography
                  fontSize={20}
                  fontWeight={600}
                  color="black"
                  paddingBottom={"10px"}
                >
                  Bài tập đã nộp
                </Typography>
                <Paper
                  style={{
                    padding: "20px 20px",
                    maxHeight: "250px",
                    overflow: "auto",
                    boxShadow: "none",
                  }}
                >
                  {submissionFiles?.map((submission) => {
                    return <Submission info={submission} />;
                  })}
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={3.8} display="flex" justifyContent="flex-end">
              <Box
                boxShadow={3}
                bgcolor={"#FCF9F9"}
                height={250}
                justifyContent={"center"}
                width={"90%"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: 7,
                }}
              >
                <Typography
                  className={"sign-in"}
                  fontSize={25}
                  fontWeight={600}
                  color="black"
                  paddingBottom={3}
                >
                  Thêm tệp đính kèm
                </Typography>
                <Box component={"form"} onSubmit={handleSubmit}>
                  <Grid
                    display="flex"
                    justifyContent="center"
                    sx={{ paddingBottom: "30px", paddingTop: "10px" }}
                  >
                    <input type="file" name="file" onChange={handleFileInput} />
                  </Grid>
                  <Grid display="flex" justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#1967D2",
                        //   borderRadius: 4,
                        width: "100%",
                      }}
                    >
                      <AddIcon style={{ color: "white" }} />
                      <Typography
                        paddingLeft={1}
                        className={"sign-in"}
                        fontSize={20}
                        fontWeight={500}
                      >
                        Tải lên
                      </Typography>
                    </Button>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default UploadAttachmentAssignment;
