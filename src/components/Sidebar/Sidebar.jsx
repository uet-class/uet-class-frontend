import { NavLink } from "react-router-dom";
import "./Sidebar.css";
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
            <NavLink to="/home" className="nav-link">
              <NewsIcon /> Bảng tin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link ">
              <DocumentIcon /> Tài liệu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/assignments" className="nav-link disabled">
              <HomeworkIcon /> Bài tập 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              <OtherIcon /> Khác
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="advance-nav">
        <ul className="nav nav-pills flex-column ">
          <li className="nav-item">
            <NavLink to="/assignments" className="nav-link">
              <ClassIcon /> Tương tác người máy test (link: Assignments)
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              <ClassIcon /> Tương tác người máy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              <ClassIcon /> Tương tác người máy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              <ClassIcon /> Tương tác người máy
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
