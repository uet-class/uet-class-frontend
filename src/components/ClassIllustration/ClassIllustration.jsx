import Classroom from "../../assets/classroom.png";
import {Box} from "@mui/material";

const ClassIllustration = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            minHeight={"100vh"}
        >
            <img src={Classroom} alt="Classroom"/>
        </Box>
    )
}

export default ClassIllustration;
