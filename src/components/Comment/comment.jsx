import "./comment.css";
import {Avatar, Button, Grid, Modal} from "@mui/material";
import React, {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import DeleteComment from "../DeleteComment/deleteComment";
import UpdateComment from "../UpdateComment/updateComment";

const Comment = (props) => {
    const [userID, setUserID] = useState()

    const [commentID, setCommentID] = useState()

    const [openDeleteComment, setOpenDeleteComment] = useState(false);
    const handleOpenDeleteComment = () => setOpenDeleteComment(true);
    const handleCloseDeleteComment = () => setOpenDeleteComment(false);

    const [openUpdateComment, setOpenUpdateComment] = useState(false);
    const handleOpenUpdateComment = () => setOpenUpdateComment(true);
    const handleCloseUpdateComment = () => setOpenUpdateComment(false);

    useEffect(() => {
        const fetchData = async () => {
            UserService.getUserInfo().then((info) => {
                setUserID(info.ID)
            });
        };
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid container wrap="nowrap" spacing={2}>
            <Grid
                item
                xs={1}
                sx={{
                    marginTop: 2,
                }}
            >
                <Avatar alt="Remy Sharp" src={props.avatar}/>
            </Grid>
            <Grid justifyContent="left" item xs={8.5} zeroMinWidth>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <h4 className="name">{props.name}</h4>
                    </Grid>
                </Grid>
                <p style={{textAlign: "left"}}>{props.content}</p>
            </Grid>
            {props.creatorID === userID ? (
                <Grid
                    item
                    xs={2.5}
                    sx={{
                        marginTop: 2,
                    }}
                >
                    <Grid container>
                        <Grid item xs={6}>
                            <Button
                                sx={{ width: 3 }}
                                onClick={() => {
                                    handleOpenDeleteComment();
                                    setCommentID(props.commentID)
                                }}
                            >
                                <DeleteIcon style={{ color: "red" }}/>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                sx={{ width: 3 }}
                                onClick={() => {
                                    handleOpenUpdateComment();
                                    setCommentID(props.commentID)
                                }}
                            >
                                <EditIcon style={{ color: "#0A5379" }}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            ) : null}

            <Modal
                open={openDeleteComment}
                onClose={handleCloseDeleteComment}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeleteComment
                    handleCloseDeleteComment={handleCloseDeleteComment}
                    handleRefresh={props.handleRefresh}
                    commentID={commentID}
                />
            </Modal>

            <Modal
                open={openUpdateComment}
                onClose={handleCloseUpdateComment}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <UpdateComment
                    handleCloseUpdateComment={handleCloseUpdateComment}
                    handleRefresh={props.handleRefresh}
                    commentID={commentID}
                />
            </Modal>
        </Grid>
    );
};

export default Comment;
