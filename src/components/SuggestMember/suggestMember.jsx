import "./suggestMember.css"
import { Avatar, Grid } from "@mui/material";

const SuggestMember = (props) => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item sx={{height: "90px", display:"flex", alignItems:"center"}}>
        <Avatar alt="Remy Sharp" src={props.avatar} />
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <h4 className="name">{props.name}</h4>
          </Grid>

        </Grid>

        <p style={{ textAlign: "left" }}>{props.email}</p>
      </Grid>
    </Grid>
  );
};

export default SuggestMember;


