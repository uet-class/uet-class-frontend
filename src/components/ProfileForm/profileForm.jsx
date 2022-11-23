import "./profileForm.css";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  Avatar,
} from "@mui/material";
import { React, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

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
  borderRadius: "25px",
  padding: "30px",
  paddingTop: "40px",
  paddingBottom: "40px",
};

const ProfileForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [timeDeadline, setTimeDeadline] = useState(
    dayjs("2014-08-18T21:11:54")
  );

  const handleTimeChange = (newValue) => {
    setTimeDeadline(newValue);
  };

  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = event.target;
    console.log(selectedFile);
    console.log(event.target.header.value);
    console.log(event.target.content.value);
    console.log(timeDeadline);
  };
  return (
    <Box sx={style}>
      <Grid
        container
        sx={{
          height: "100%",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{
            height: "100%",
            // backgroundColor: "gray",
            // borderRight: 4,
            // display:"flex",
            borderColor: "#A9A9A9",
            // justifyContent: "center",
            // alignItems:"center"
          }}
        >
          <Container
            maxWidth={false}
            disableGutters
            sx={
              {
                //   backgroundColor: "gray",
              }
            }
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://i.insider.com/61135525ad63f30019501966?width=700"
                sx={{
                  height: "180px",
                  width: "180px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
              }}
            >
              <Typography fontSize={32} fontWeight={600} color="black">
                Phạm Vũ Minh
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            minHeight: "100px",
            paddingLeft: "40px",
            borderLeft: 4,
            borderColor: "#A9A9A9",
          }}
        >
          <Container maxWidth={false} disableGutters sx={{}}>
            <Paper
              style={{
                // padding: "40px 20px",
                maxHeight: "700px",
                overflow: "auto",
                boxShadow: "none",
              }}
            >
              <Typography
                fontSize={32}
                fontWeight={600}
                color="black"
                marginBottom={3}
              >
                Hồ sơ cá nhân
              </Typography>
              <Box component={"form"} onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  name="name"
                  label="Họ và tên"
                  defaultValue="Phạm Vũ Minh"
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: { color: "black", fontSize: 20, fontWeight: "bold" },
                  }}
                />
                <TextField
                  id="email"
                  name="email"
                  disabled
                  label="Email"
                  defaultValue="wibu@gmail.com"
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: { color: "black", fontSize: 20, fontWeight: "bold" },
                  }}
                />
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Số điện thoại"
                  defaultValue="0321654789"
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: { color: "black", fontSize: 20, fontWeight: "bold" },
                  }}
                />
                <TextField
                  id="class"
                  name="class"
                  label="Lớp quản lý"
                  defaultValue="K64CACLC2"
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: { color: "black", fontSize: 20, fontWeight: "bold" },
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Ngày sinh"
                    inputFormat="DD/MM/YYYY"
                    value={timeDeadline}
                    onChange={handleTimeChange}
                    renderInput={(params) => (
                      <TextField
                        InputLabelProps={{
                          style: {
                            color: "black",
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
                <Typography
                  fontSize={16}
                  fontWeight={"bold"}
                  marginTop={2}
                  color="black"
                >
                  Thay avatar
                </Typography>
                <input type="file" name="file" onChange={handleFileInput} />
              </Box>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileForm;
