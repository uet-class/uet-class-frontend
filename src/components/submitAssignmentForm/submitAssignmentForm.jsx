import "./submitAssignmentForm.css";
import { Box, Button, Grid, Typography, Container, Paper } from "@mui/material";
import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";

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
  borderRadius: "25px",
};

const SubmitAssignmentForm = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = event.target;
    console.log(selectedFile);
    console.log(props.info.ID)
  };

  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
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
                    maxHeight: "300px",
                    overflow: "auto",
                    boxShadow: "none",
                  }}
                >
                  <Typography fontSize={20} fontWeight={100} color="black">
                    {props.info?.Content}
                  </Typography>
                </Paper>
              </Box>
              {/* <Box
                sx={{
                  // borderBottom: 1,
                  borderColor: "black",
                  paddingTop: 3,
                  paddingBottom: 5,
                  // maxHeight: "100%",
                }}
              >
                <Paper
                  style={{
                    padding: "40px 20px",
                    maxHeight: "300px",
                    overflow: "auto",
                    boxShadow: "none",
                  }}
                >
                  {comment_example.map((comment) => {
                    // console.log(comment.avatar)
                    return (
                      <Comment
                        name={comment.name}
                        avatar={comment.avatar}
                        content={comment.content}
                        time={comment.time}
                      />
                    );
                  })}
                </Paper>
              </Box> */}
            </Grid>
            <Grid
              item
              xs={3.8}
              display="flex"
              justifyContent="flex-end"
              sx={
                {
                  // backgroundColor: "yellow",
                  // display: "flex",
                  // alignItems: "end",
                }
              }
            >
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
                  Nộp bài tập
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

export default SubmitAssignmentForm;
