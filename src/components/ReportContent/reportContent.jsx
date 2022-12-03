import {Box, Grid, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ReportContent = (props) => {
    return (
        <Box sx={style}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={"h5"}>
                        Báo cáo của người dùng số {props.reporterID}
                    </Typography>
                </Grid>
                <Grid
                    item xs={12}
                    sx={{
                        paddingTop: 3
                    }}
                >
                    <Typography
                        variant={"normal-text"}
                    >
                        {props.reportMessage}
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}

export default ReportContent;