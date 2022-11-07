import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from "../Icon/HomeIcon";
import NewsIcon from "../Icon/NewsIcon";
import DocumentIcon from "../Icon/DocumentIcon";
import HomeworkIcon from "../Icon/HomeworkIcon";
import OtherIcon from "../Icon/OtherIcon";
import ClassIcon from "../Icon/ClassIcon";

const Sidebar = (props) => {
  return (
    <div className="wrapped">
      <div className="basic-nav">
        <ul className="nav nav-pills flex-column mx">
          {
            props.info['basicLink'].map(function(link, i) {
              console.log(props)
              return <NavLink to={link} className="nav-link">
              {props.info['basicIcon'][i]} {props.info['basicLinkName'][i]}
            </NavLink>
            })
          }
        </ul>
      </div>
      <div className="advance-nav">
        <ul className="nav nav-pills flex-column ">
          {
            props.info['classLinks'].map(function(link, i) {
              console.log(props)
              return <Link to={link} className="nav-link">
              <ClassIcon /> {props.info['classes'][i]}
            </Link>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
