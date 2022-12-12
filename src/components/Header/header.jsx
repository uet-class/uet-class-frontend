import "./header.css";
import * as React from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useNavigate } from "react-router";
import AuthService from "../../services/auth.service";
import { Modal, Box } from "@mui/material";
import ProfileForm from "../ProfileForm/profileForm";
import { useState, useEffect } from "react";
import UserService from "../../services/user.service";

export default function Header(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const handleCloseProfile = () => setOpenProfile(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const [refreshPage, setRefreshPage] = useState(false);
  const handleRefresh = () => {
    setRefreshPage((current) => !current);
  };

  const [userInfo, setUserInfo] = useState('');

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    AuthService.logout();
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      await UserService.getUserInfo().then((info) => {
        // console.log(info.FullName);
        setUserInfo(info)
      });
    };
    fetchData();
  }, [refreshPage]);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  return (
    <>
      <div className="header">
        <div className="topbarWrapper">
          <div className="logoInfor">
            <img
              src={require("../../assets/logo.png")}
              alt="UET CLASS"
              width="40"
              height="40"
              className="logoImg"
              onClick={() => {
                navigate("/home");
              }}
            />
            <span
              className="logoText"
              onClick={() => {
                navigate("/home");
              }}
            >
              UET Class
            </span>
          </div>
          <div className="userInfor">
            <span className="userName">{userInfo.FullName}</span>
            <div className="userOption">
              {!open ? (
                <ExpandMoreOutlinedIcon
                  ref={anchorRef}
                  id="composition-button"
                  onClick={handleToggle}
                  sx={{ color: "#FFFFFF" }}
                />
              ) : (
                <ExpandLessIcon
                  ref={anchorRef}
                  id="composition-button"
                  onClick={handleToggle}
                  sx={{ color: "#FFFFFF" }}
                />
              )}
            </div>
            <img
              src={userInfo.AvatarUrl}
              alt="UET CLASS"
              width="40"
              height="40"
              className="userImg"
            />
            <Popper
              open={open}
              // anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              style={{
                position: "absolute",
                bottom: 0,
                right: 45,
                top: 45,
                left: "unset",
                width: 130,
              }}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={() => {
                            handleOpenProfile();
                          }}
                        >
                          Hồ sơ của tôi
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </div>
      <div className="children">{props.children}</div>
      <Modal
        open={openProfile}
        onClose={handleCloseProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ProfileForm
            openProfile={openProfile}
            handleCloseProfile={handleCloseProfile}
            handleRefresh={handleRefresh}
            userInfo={userInfo}
          />
        </Box>
      </Modal>
    </>
  );
}
