import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";
import AdminAddUser from "../AdminAddUser/adminAddUser";
import AdminDeleteUser from "../AdminDeleteUser/adminDeleteUser";
import {useNavigate} from "react-router-dom";

const AdminNavBar = (props) => {
    const [openAddUser, setOpenAddUser] = useState(false);
    const handleOpenAddUser = () => setOpenAddUser(true);
    const handleCloseAddUser = () => setOpenAddUser(false);

    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const handleOpenDeleteUser = () => setOpenDeleteUser(true);
    const handleCloseDeleteUser = () => setOpenDeleteUser(false);

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
                <Grid item xs={4}>
                    <Button
                        onClick={() => {
                            navigate("/admin/reports");
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
                </Grid>
                <Grid item xs={4}>
                    <Button
                        onClick={() => {
                            navigate("/admin/class");
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
                </Grid>
                <Grid
                    item xs={2}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        onClick={handleOpenAddUser}
                        variant="contained"
                        sx={{
                            backgroundColor: "#305264",
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
                            Thêm người dùng
                        </Typography>
                    </Button>
                </Grid>
                <Grid
                    item xs={2}
                    display="flex"
                    justifyContent="flex-end"
                >
                    <Button
                        onClick={handleOpenDeleteUser}
                        variant="contained"
                        sx={{
                            backgroundColor: "#305264",
                            borderRadius: 4,
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