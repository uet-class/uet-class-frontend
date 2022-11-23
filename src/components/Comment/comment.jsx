import "./comment.css";
import { Avatar, Grid } from "@mui/material";

const Comment = (props) => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <h4 className="name">{props.name}</h4>
          </Grid>
          <Grid item>
            <p className="post-time">{props.time}</p>
          </Grid>
        </Grid>

        <p style={{ textAlign: "left" }}>{props.content}</p>
      </Grid>
    </Grid>
  );
};

export default Comment;
