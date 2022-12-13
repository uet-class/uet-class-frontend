import "./profileForm.css";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  Avatar,
  Button,
  Alert,
} from "@mui/material";
import { React, useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import UserService from "../../services/user.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #dddddd",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  borderRadius: "10px",
  padding: "30px",
  paddingTop: "40px",
  paddingBottom: "40px",
};

const ProfileForm = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updateProfileFail, setUpdateProfileFail] = useState(false);
  const [timeBirthDate, setTimeBirthDate] = useState(
    dayjs("01-02-2003", "DD-MM-YYYY")
  );

  useEffect(() => {
    setTimeBirthDate(props.userInfo.DateOfBirth);
  }, [props.userInfo]);

  const handleTimeChange = (newValue) => {
    setTimeBirthDate(newValue);
  };

  const handleFileInput = (e) => {
    console.log(selectedFile);
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.dateOfBirth.value = event.target.dateOfBirth.value.replace(
      "/",
      ""
    );

    // UserService.updateUserAvatar(selectedFile).then((res) => {
    //   if (res.status === 200) {
    //     props.handleCloseProfile();
    //     props.handleRefresh();
    //   } else {
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // });

    UserService.updateUserInfo(event.target)
      .then((res) => {
        UserService.updateUserAvatar(selectedFile).then(() => {
          if (res.status === 200) {
            props.handleCloseProfile();
            props.handleRefresh();
          } else {
            const error = new Error(res.error);
            throw error;
          }
        });
      })
      .catch((err) => {
        setUpdateProfileFail(true);
      });
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
            sx={{
              //   backgroundColor: "gray",
              paddingRight: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "100px",
                // height: "100%",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={props.userInfo.AvatarUrl}
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
                paddingTop: "30px",
              }}
            >
              <Typography fontSize={32} fontWeight={600} color="#003049">
                {props.userInfo.FullName}
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
            {updateProfileFail ? (
              <Alert severity="error">Cập nhật thông tin thất bại</Alert>
            ) : null}
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
                color="#003049"
                marginBottom={3}
              >
                Hồ sơ cá nhân
              </Typography>
              <Box component={"form"} onSubmit={handleSubmit}>
                <TextField
                  name="email"
                  disabled
                  label="Email"
                  defaultValue={props.userInfo.Email}
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: {
                      color: "#003049",
                      fontSize: 20,
                      fontWeight: "bold",
                    },
                  }}
                />
                <TextField
                  name="fullname"
                  label="Họ và tên"
                  defaultValue={props.userInfo.FullName}
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: {
                      color: "#003049",
                      fontSize: 20,
                      fontWeight: "bold",
                    },
                  }}
                />

                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Số điện thoại"
                  defaultValue={props.userInfo.PhoneNumber}
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: {
                      color: "#003049",
                      fontSize: 20,
                      fontWeight: "bold",
                    },
                  }}
                />
                {/* <TextField
                  id="class"
                  disabled
                  name="class"
                  label="Lớp quản lý"
                  defaultValue={props.userInfo.ClassName}
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: "30px" }}
                  InputLabelProps={{
                    style: { color: "#003049", fontSize: 20, fontWeight: "bold" },
                  }}
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Ngày sinh"
                    inputFormat="DD-MM-YYYY"
                    value={timeBirthDate}
                    onChange={handleTimeChange}
                    renderInput={(params) => (
                      <TextField
                        name="dateOfBirth"
                        InputLabelProps={{
                          style: {
                            color: "#003049",
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
                  color="#003049"
                  paddingTop={1}
                >
                  Thay ảnh đại diện
                </Typography>
                <input type="file" name="file" onChange={handleFileInput} />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#0A5379",
                    borderRadius: 1,
                    width: "30%",
                    marginLeft: "190px",
                    textTransform: "none",
                  }}
                >
                  <Typography fontSize={20} fontWeight={500}>
                    Cập nhật
                  </Typography>
                </Button>
              </Box>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileForm;
