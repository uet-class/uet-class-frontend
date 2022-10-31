import "./Header.css";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
export default function Header(props){
    return (
        <>
            <div className="header">
                <div className="topbarWrapper">
                    <div className="logoInfor">
                        <img src={require('../../assets/pic1.png')} alt="UET CLASS" width="45" height="45" className="logoImg" />
                        <span className="logoText">
                            UET CLASS
                        </span>
                    </div>
                    <div className="userInfor">
                        <span className="userName">
                            Pham Vu Minh
                        </span>
                        <div className="userOption">
                        <ExpandMoreOutlinedIcon sx={{ color: "#FFFFFF"}}/>
                        </div>
                        <img src={require('../../assets/pic1.png')} alt="UET CLASS" width="40" height="40" className="userImg" />
                    </div>
                </div>
            </div>
            {props.children}
        </>
    )
}

// https://mui.com/material-ui/react-menu/#menulist-composition