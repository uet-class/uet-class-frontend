import {Box, Grid, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ReportContent = (props) => {
    return (
        <Box sx={style}>
            <Grid container
                  display={"flex"}
                  justifyContent={"flex-end"}
                  paddingBottom={2}
            >
                <Grid item xs={4}>
                    <Grid container
                          paddingBottom={2}
                    >
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Người báo cáo:
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Đối tượng:
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container
                          paddingBottom={2}
                    >
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                            }}
                        >
                            {props.reporterEmail}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                            }}
                        >
                            {props.reportObjectContact}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider
                variant="middle"
            />
            <Grid container
                  sx={{
                      maxHeight: '60vh',
                      overflow: 'auto',
                      paddingTop: 2,
                  }}
            >
                    <Typography>
                        {props.reportMessage}
                    </Typography>
            </Grid>
        </Box>
    )
}

export default ReportContent;