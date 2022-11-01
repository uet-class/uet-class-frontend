import "./Header.css";
import * as React from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export default function Header(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

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
              src={require("../../assets/pic1.png")}
              alt="UET CLASS"
              width="40"
              height="40"
              className="logoImg"
            />
            <span className="logoText">UET Class</span>
          </div>
          <div className="userInfor">
            <span className="userName">Pham Vu Minh</span>
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
              src={require("../../assets/pic1.png")}
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
                right: 50,
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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
}

// https://mui.com/material-ui/react-menu/#menulist-composition
