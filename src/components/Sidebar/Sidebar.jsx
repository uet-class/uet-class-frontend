import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from "../Icon/HomeIcon";
import NewsIcon from "../Icon/NewsIcon";
import DocumentIcon from "../Icon/DocumentIcon";
import HomeworkIcon from "../Icon/HomeworkIcon";
import OtherIcon from "../Icon/OtherIcon";
import ClassIcon from "../Icon/ClassIcon";

const Sidebar = () => {
  return (
    <div className="wrapped">
      <div className="basic-nav">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              <HomeIcon /> Trang chủ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link">
              <NewsIcon /> Bảng tin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link ">
              <DocumentIcon /> Tài liệu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/assignments" className="nav-link">
              <HomeworkIcon /> Bài tập 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link">
              <OtherIcon /> Khác
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="advance-nav">
        <ul className="nav nav-pills flex-column ">
          <li className="nav-item">
            <Link to="/assignments" className="nav-link">
              <ClassIcon /> Tương tác người máy test (link: Assignments)
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <ClassIcon /> Tương tác người máy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <ClassIcon /> Tương tác người máy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <ClassIcon /> Tương tác người máy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
