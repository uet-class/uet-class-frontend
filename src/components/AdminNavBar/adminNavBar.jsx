import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";
import AdminAddUser from "../AdminAddUser/adminAddUser";
import AdminDeleteUser from "../AdminDeleteUser/adminDeleteUser";
import {useLocation, useNavigate} from "react-router-dom";

const AdminNavBar = (props) => {
    const [openAddUser, setOpenAddUser] = useState(false);
    const handleOpenAddUser = () => setOpenAddUser(true);
    const handleCloseAddUser = () => setOpenAddUser(false);

    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const handleOpenDeleteUser = () => setOpenDeleteUser(true);
    const handleCloseDeleteUser = () => setOpenDeleteUser(false);

    const location = useLocation();

    let isReport = true
    if (location.pathname !== "/admin/reports") {
        isReport = false
    }

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                borderBottom: 1,
                borderColor: "#A9A9A9",
                paddingTop: 6,
                paddingBottom: 2,
            }}
        >
            <Grid container>
                <Grid item xs={2.285}>
                    <Box
                        sx={{
                            backgroundColor: isReport ? "#D3D3D3" : "white"
                        }}
                    >
                        <Button
                            onClick={() => {
                                navigate("/admin/reports");
                            }}
                            sx={{
                                textTransform: "none",
                            }}
                        >
                            <Typography
                                className={"your-class"}
                                fontSize={32}
                                fontWeight={600}
                            >
                                Danh sách báo cáo
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={2.285}>
                    <Box
                        sx={{
                            backgroundColor: !isReport ? "#D3D3D3" : "white"
                        }}
                    >
                        <Button
                            onClick={() => {
                                navigate("/admin/class");
                            }}
                            sx={{
                                textTransform: "none",
                            }}
                        >
                            <Typography
                                className={"your-class"}
                                fontSize={32}
                                fontWeight={600}
                            >
                                Danh sách lớp
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={3.43}>

                </Grid>
                <Grid
                    item xs={2.35}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        onClick={handleOpenAddUser}
                        variant="contained"
                        sx={{
                            backgroundColor: "#305264",
                            textTransform: "none",
                        }}
                    >
                        <AddIcon style={{color: 'white'}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Thêm người dùng
                        </Typography>
                    </Button>
                </Grid>
                <Grid
                    item xs={1.65}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        onClick={handleOpenDeleteUser}
                        variant="contained"
                        sx={{
                            backgroundColor: "#305264",
                            textTransform: "none",
                        }}
                    >
                        <DeleteIcon style={{color: 'white'}}/>
                        <Typography
                            paddingLeft={1}
                            className={"sign-in"}
                            fontSize={20}
                            fontWeight={500}
                        >
                            Xóa người dùng
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

            <Modal
                open={openAddUser}
                onClose={handleCloseAddUser}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AdminAddUser handleCloseAddUser={handleCloseAddUser}
                />
            </Modal>

            <Modal
                open={openDeleteUser}
                onClose={handleCloseDeleteUser}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AdminDeleteUser handleRefresh={props.handleRefresh}
                                 handleCloseDeleteUser={handleCloseDeleteUser}
                />
            </Modal>
        </Box>
    )
}

export default AdminNavBar;