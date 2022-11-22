import "./createAssignmentForm.css";
import { Box } from "@mui/material";
import { React } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  borderRadius: "25px",
};

const CreateAssignmentForm = () => {
  return <Box sx={style}></Box>;
};

export default CreateAssignmentForm;
