import "./attachment.css"
import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ClassService from "../../services/class.service";

const Attachment = (props) => {
  let classID = localStorage.getItem("classID");

  const reviewSubmission = (fileName) => {
    console.log(classID, fileName)
    ClassService.reviewClassMaterials(classID, fileName).then((res) => {
      window.open(res.data.message)
    })
  }

  return (
    <Box sx={{
      border: "1px solid #000",
      paddingTop: "10px",
      margin: "10px",
      borderRadius: "10px",
      width: "300px"
    }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid
          item
          xs={1.7}
          sx={{
            height: 70,
          }}
        >
          <Box marginTop={0.2} paddingLeft={"5px"} >
          <ArticleIcon
            style={{
              color: "#464646",
              // marginRight: "6px",
              height: "40px",
              width: "40px",
            }}
          />
          </Box>
          
        </Grid>
        <Grid display="flex" justifyContent="left" item xs={8} zeroMinWidth>
          <Typography paddingLeft={1} fontSize={18} fontWeight={600} paddingTop={1} maxWidth={"100%"} noWrap>
            {props.info.fileName?.split('/')[1]}
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="left" item xs={2} zeroMinWidth>
          <Box marginTop={0.7} >
          <RemoveRedEyeIcon
            style={{
              color: "#003049",
              height: "35px",
              width: "35px",
            }}
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              reviewSubmission(props.info.fileName)
            }}
          />
          </Box>
       
        </Grid>

      </Grid>
    </Box>
  );
};

export default Attachment;

