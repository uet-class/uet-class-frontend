import "./createReportUserForm.css";
import {
  Box,
  TextField,
  Typography,
  Container,
  Button,
} from "@mui/material";
import reportService from "../../services/report.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  justifyContent: "center",
  p: 4,
  borderRadius: "25px",
};

const CreateReportUserForm = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.content.value);
    reportService.createUserReports(props.reporterID, props.userInfoReport.ID, event.target.content.value).then(() => {
        props.handleCloseReportMemberClass()
    })
  };
  return (
    <Box sx={style}>
      <Typography
        className={"sign-in"}
        fontSize={22}
        fontWeight={600}
        color="black"
      >
        Báo cáo người dùng {props.userInfoReport.FullName}
      </Typography>

      <Box component={"form"} onSubmit={handleSubmit}>
        <Container maxWidth={false} disableGutters sx={{}}>
          <TextField
            id="content"
            name="content"
            label="Lý do báo cáo"
            variant="standard"
            fullWidth
            multiline
            maxRows={10}
            // inputProps={{ style: {color: "black", fontSize: 20} }}
            // InputLabelProps={{
            //   style: { color: "black", fontSize: 20, fontWeight: "semi-bold" },
            // }}
          />
          <Box maxWidth display="flex" justifyContent={"flex-end"} marginTop={2}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#1967D2",
                borderRadius: 4,
                width: "150px",
                height: "40px",
              }}
            >
              <Typography
                paddingLeft={1}
                paddingTop={0}
                className={"sign-in"}
                fontSize={18}
                fontWeight={600}
              >
                Báo cáo
              </Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CreateReportUserForm;
