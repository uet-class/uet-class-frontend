import { Box, Button, Grid, Typography } from "@mui/material";
import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./createDocumentsForm.css";
import ClassService from "../../services/class.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  borderRadius: "25px",
};

const CreateDocuments = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  var formData = new FormData();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = event.target;
    // console.log(selectedFile);
    formData.append("file", selectedFile);
    ClassService.uploadClassMaterial(20, formData).then(() => {
      props.handleRefresh();
      props.handleCloseCreateDocument();
    });
  };

  const handleFileInput = (e) => {
    // console.log(typeof e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
  return (
    <Box sx={style}>
      <Typography
        className={"sign-in"}
        fontSize={25}
        fontWeight={600}
        color="black"
      >
        Thêm tài liệu
      </Typography>

      <Box component={"form"} onSubmit={handleSubmit}>
        <Grid
          display="flex"
          justifyContent="center"
          sx={{ paddingBottom: "20px", paddingTop: "10px" }}
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
  );
};

export default CreateDocuments;
