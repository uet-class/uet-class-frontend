import "./addMemberClassForm.css";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";
import { React, useState } from "react";
import SuggestMember from "../SuggestMember/suggestMember";
import ClassService from "../../services/class.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "51%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 2,
  borderRadius: "25px",
};

const suggest_example = [
  {
    name: "Phạm Vũ Minh",
    email: "minhwjbu@gmail.com",
    avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
  },
  {
    name: "Phạm Vũ Minh",
    email: "minhwjbu@gmail.com",
    avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
  },
  {
    name: "Phạm Vũ Minh",
    email: "minhwjbu@gmail.com",
    avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
  },

  {
    name: "Phạm Vũ Minh",
    email: "minhwjbu@gmail.com",
    avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
  },

  {
    name: "Phạm Vũ Minh",
    email: "minhwjbu@gmail.com",
    avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
  },

  {
    name: "Phạm Vũ Minh",
    email: "minhwjbu@gmail.com",
    avatar: "https://i.insider.com/61135525ad63f30019501966?width=700",
  },
];

const AddMemberClassForm = () => {
  const [emailAdd, setEmailAdd] = useState([]);
  // const [role, setRole] = useState("Học viên");
  let classId = 20;

  // const handleChangeRole = (event) => {
  //   setRole(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = event.target;
    ClassService.inviteMember(classId, emailAdd)
    setEmailAdd([""]);
    console.log(emailAdd);
  };

  const handleChangeEmailInput = (e) => {
    console.log(emailAdd);
    setEmailAdd([]);
    setEmailAdd((emails) => [...emails, e.target.value]);
  };

  const handleChooseEmailInput = (email) => {
    // console.log(e.target.value);
    setEmailAdd([]);
    setEmailAdd((emails) => [...emails, email]);
  };

  return (
    <Box sx={style}>
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "black",
            paddingTop: 3,
            // paddingBottom: 1,
            marginBottom: 2,
          }}
        >
          <Container maxWidth={false} disableGutters>
            <Typography
              fontSize={25}
              fontWeight={600}
              color="black"
              paddingBottom={"10px"}
            >
              Mời học viên mới
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={12} sx={{ marginTop: "0px" }}>
                  <TextField
                    name="email"
                    // label="Email"
                    defaultValue={"example@gmail.com"}
                    variant="standard"
                    fullWidth
                    sx={{ marginBottom: "10px" }}
                    onChange={handleChangeEmailInput}
                    value={emailAdd[0]}
                  />
                </Grid>
                {/* <Grid item xs={0.2} sx={{ marginTop: "0px" }}></Grid>
                <Grid item xs={2} sx={{ marginTop: "0px" }}>
                  <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Vai trò
                    </InputLabel>
                    <Select
                      labelId="role"
                      id="role"
                      name="role"
                      value={role}
                      onChange={handleChangeRole}
                      defaultValue={"Học viên"}
                      // label="Age"
                    >
                      <MenuItem value={"Giảng viên"}>Giảng viên</MenuItem>
                      <MenuItem value={"Học viên"}>Học viên</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}
              </Grid>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#1967D2",
                    borderRadius: 4,
                    width: "15%",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    // paddingLeft={1}
                    className={"sign-in"}
                    fontSize={15}
                    fontWeight={500}
                  >
                    Mời
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box>
          <Paper
            style={{
              padding: "10px 20px",
              maxHeight: "300px",
              overflow: "auto",
              boxShadow: "none",
            }}
          >
            {suggest_example.map((suggest) => {
              // console.log(comment.avatar)
              return (
                <Box
                  onClick={() => {
                    // handleChooseEmailInput(suggest.email);
                    handleChooseEmailInput("minhquan.vo01@gmail.com");
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <SuggestMember
                    name={suggest.name}
                    avatar={suggest.avatar}
                    email={suggest.email}
                  />
                </Box>
              );
            })}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default AddMemberClassForm;
