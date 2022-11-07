import {Box, Typography} from "@mui/material";
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const JoinClass = () => {
    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Tiêu đề tham gia lớp
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Đây là modal tham gia vào lớp.
            </Typography>
        </Box>
    )
}

export default JoinClass;