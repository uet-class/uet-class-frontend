import "./createAssignmentForm.css";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Button,
  Alert,
} from "@mui/material";
import { React, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AssignmentService from "../../services/assignment.service";
import moment from "moment/moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  // borderRadius: "25px",
};

const CreateAssignmentForm = (props) => {
  let classID = localStorage.getItem("classID");
  let userID = localStorage.getItem("userId");
  // const [selectedFile, setSelectedFile] = useState(null);
  const [timeDeadline, setTimeDeadline] = useState(
    moment()
  );
  const [createAssignmentFail, setCreateAssignmentFail] = useState(false);

  const handleTimeChange = (newValue) => {
    setTimeDeadline(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    AssignmentService.createAssignment(
      classID,
      userID,
      event.target,
      moment(timeDeadline).format("DD/MM/YYYY, h:mm:ss")
    )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          props.handleRefresh()
          props.handleCloseCreateAssignment();
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        setCreateAssignmentFail(true);
      });
  };
  return (
    <Box sx={style}>
      {createAssignmentFail ? (
        <Alert severity="error">Tạo bài tập thất bại</Alert>
      ) : null}
      <Typography
        className={"sign-in"}
        fontSize={25}
        fontWeight={600}
        color="black"
      >
        Thêm bài tập
      </Typography>
      <Box component={"form"} onSubmit={handleSubmit}>
        <Container maxWidth={false} disableGutters sx={{}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid
                item
                // xs={5.9}
                xs={12}
                display="flex"
                justifyContent="flex-start"
                sx={{ height: 110 }}
                margin={0.5}
              >
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{
                    // paddingLeft: 8,
                    padding: 2,
                    paddingTop: 3,
                    // backgroundColor: "#D9D9D9",
                    opacity: "100%",
                    borderRadius: "24px",
                  }}
                >
                  <Typography
                    className={"input-rounded"}
                    fontSize={20}
                    fontWeight={500}
                    sx={{
                        color: "#0A5379"
                    }}
                >
                    Tiêu đề
                </Typography>
                  <TextField
                    id="header"
                    name="header"
                    // label="Tiêu đề"
                    // variant="standard"
                    input-rounded
                    fullWidth
                    className={"input-rounded"}
                    // sx={{ width: "100%" }}
                    // InputLabelProps={{
                    //   style: {
                    //     color: "black",
                    //     fontSize: 20,
                    //     fontWeight: "bold",
                    //   },
                    // }}
                  />
                </Container>
              </Grid>
              {/* <Grid
                item
                xs={5.9}
                display="flex"
                justifyContent="flex-end"
                sx={{ height: 110 }}
                margin={0.5}
              >
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{
                    // paddingLeft: 8,
                    padding: 2,
                    backgroundColor: "#D9D9D9",
                    opacity: "100%",
                    borderRadius: "24px",
                  }}
                >
                  <Box display="flex" paddingLeft={5}>
                    <Typography fontSize={30} fontWeight={600} color="black">
                      Đính kèm
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    <input type="file" name="file" onChange={handleFileInput} />
                  </Box>
                </Container>
              </Grid> */}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                // paddingLeft: 8,
                padding: 2,
                paddingTop: 1,
                // backgroundColor: "#D9D9D9",
                opacity: "100%",
                borderRadius: "24px",
                marginTop: "20px",
              }}
            >
              <Typography
                    className={"input-rounded"}
                    fontSize={20}
                    fontWeight={500}
                    sx={{
                        color: "#0A5379"
                    }}
                >
                    Nội dung
                </Typography>
              <TextField
                id="content"
                name="content"
                // label="Nội dung"
                // variant="standard"
                className={"input-rounded"}
                fullWidth
                multiline
                maxRows={10}
                minRows={10}
                // inputProps={{ style: {color: "black", fontSize: 20} }}
                // InputLabelProps={{
                //   style: { color: "black", fontSize: 20, fontWeight: "bold" },
                // }}
              />
            </Container>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid
                item
                xs={6}
                display="flex"
                justifyContent="flex-start"
                sx={{ height: 110 }}
                margin={0.5}
                // backgroundColor="blue"
              >
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{
                    // paddingLeft: 8,
                    padding: 2,
                    paddingTop: 3,
                    // backgroundColor: "#D9D9D9",
                    opacity: "100%",
                    borderRadius: "24px",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                      label="Hạn nộp bài tập"
                      value={timeDeadline}
                      onChange={handleTimeChange}
                      renderInput={(params) => (
                        <TextField
                          InputLabelProps={{
                            style: {
                              color: "#0A5379",
                              fontSize: 20,
                              fontWeight: "bold",
                            },
                          }}
                          fullWidth
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Container>
              </Grid>
              <Grid
                item
                xs={4.9}
                display="flex"
                justifyContent="center"
                sx={{ height: 110, paddingLeft: "130px" }}
                margin={0.5}
                alignItems="center"
                // backgroundColor="blue"
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#0A5379",
                    // borderRadius: 4,
                    width: "220px",
                    height: "55px",
                  }}
                >
                  <AddIcon style={{ color: "white" }} />
                  <Typography
                    paddingLeft={1}
                    className={"sign-in"}
                    fontSize={18}
                    fontWeight={500}
                  >
                    Tạo bài tập mới
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CreateAssignmentForm;
