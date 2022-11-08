import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";

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

const JoinClass = () => {
    return (
        <Box sx={style}>
            <Box
                component={"form"}
            >
                <Typography
                    className={"login-info"}
                    fontSize={32}
                    fontWeight={500}
                    sx={{
                        paddingBottom: 3,
                        color: "#000000",
                    }}
                >
                    Nhập mã lớp
                </Typography>
                <Typography
                    className={"login-info"}
                    fontSize={18}
                    fontWeight={300}
                    sx={{
                        paddingBottom: 2,
                        color: "#000000",
                    }}
                >
                    Hãy liên hệ với giáo viên của bạn để nhận mã lớp, sau đó nhập mã vào đây
                </Typography>
                <TextField
                    name="username"
                    className={"input-rounded"}
                    autoComplete='off'
                    sx={{
                        width: "100%",
                        paddingBottom: 3,
                    }}
                ></TextField>
                <Grid
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            color: "#015198",
                            borderRadius: 4,
                        }}
                    >
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Tham gia lớp
                        </Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default JoinClass;