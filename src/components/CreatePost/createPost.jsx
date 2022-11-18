import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CreatePost = () => {
    //const [createPostFail, setCreatePostFail] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = event.target;
        console.log(data.title.value)
        console.log(data.content.value)
        console.log(selectedFile);
    };

    const handleFileInput = (e) => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
    };

    return (
        <Box sx={style}>
            {/*{createPostFail ? (*/}
            {/*    <Alert severity="error">*/}
            {/*        Tạo bài đăng thất bại*/}
            {/*    </Alert>*/}
            {/*) : null}*/}
            <Box
                component={"form"} onSubmit={handleSubmit}
            >
                <Typography
                    className={"login-info"}
                    fontSize={20}
                    fontWeight={500}
                >
                    Tiêu đề
                </Typography>
                <TextField
                    name="title"
                    className={"input-rounded"}
                    autoComplete='off'
                    sx={{
                        width: "100%",
                        paddingBottom: 3,
                    }}
                ></TextField>
                <Typography
                    className={"login-info"}
                    fontSize={20}
                    fontWeight={500}
                >
                    Nội dung
                </Typography>
                <TextField
                    name="content"
                    className={"input-rounded"}
                    autoComplete='off'
                    multiline
                    sx={{
                        width: "100%",
                        paddingBottom: 3,
                    }}
                ></TextField>
                <Button
                    variant="contained"
                    component="label"
                >
                    <input
                        name="file"
                        type="file"
                        onChange={handleFileInput}
                    />
                </Button>
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
                        <AddIcon style={{color: 'white'}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Đăng
                        </Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default CreatePost;