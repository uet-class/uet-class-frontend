import "./submission.css";
import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ClassService from "../../services/class.service";

const Submission = (props) => {
  let classID = localStorage.getItem("classID");

  const reviewSubmission = (fileName) => {
    ClassService.reviewClassMaterials(classID, fileName).then((res) => {
      window.open(res.data.message)
    })
  }

  return (
    <Box sx={{
      borderBottom: "1px solid #000",
      paddingTop: "10px"
    }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid
          item
          xs={0.8}
          sx={{
            height: 70,
          }}
        >
          <Box marginTop={0.2} >
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
        <Grid display="flex" justifyContent="left" item xs={5} zeroMinWidth>
          <Typography paddingLeft={1} fontSize={18} fontWeight={600} paddingTop={1} maxWidth={"100%"} noWrap>
            {props.info.FileName.split('/')[2]}
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="center" item xs={6} zeroMinWidth>
        <Typography paddingLeft={1} fontSize={18} fontWeight={500} paddingTop={1} maxWidth={"100%"} noWrap>
            {props.info.CreatorName}
          </Typography>
        </Grid>

        <Grid display="flex" justifyContent="left" item xs={1} zeroMinWidth>
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
              reviewSubmission(props.info.FileName)
            }}
          />
          </Box>
       
        </Grid>

      </Grid>
    </Box>
  );
};

export default Submission;
