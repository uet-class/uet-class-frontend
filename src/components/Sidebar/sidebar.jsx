import "./sidebar.css";
import { NavLink, Link } from "react-router-dom";
import ClassIcon from "../Icon/classIcon";
import React, { useEffect, useState } from "react";
import ClassService from "../../services/class.service";
import HomeIcon from "../../components/Icon/homeIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";

const Sidebar = (props) => {
  const [classes, setClasses] = useState();

  let classID = localStorage.getItem("classID");
  var sideBar = {};
  sideBar.basicLink = [
    "/home",
    `/class/${classID}/posts`,
    `/class/${classID}/documents`,
    `/class/${classID}/assignments`,
    `/class/${classID}/classList`,
  ];
  sideBar.basicLinkName = [
    "Trang chủ",
    "Bảng tin",
    "Tài liệu",
    "Bài tập",
    "Danh sách lớp",
  ];
  sideBar.basicIcon = [
    <HomeIcon />,
    <NewsIcon />,
    <DocumentIcon />,
    <HomeworkIcon />,
    <OtherIcon />,
  ];

  useEffect(() => {
    ClassService.listClass().then((listClass) => {
      const classArr = [];
      if (listClass.data.message.teacherClasses != null) {
        for (let i = 0; i < listClass.data.message.teacherClasses.length; i++) {
          if (listClass.data.message.teacherClasses[i].DeletedAt == null) {
            classArr.push(listClass.data.message.teacherClasses[i]);
          }
        }
      }
      if (listClass.data.message.studentClasses != null) {
        for (let i = 0; i < listClass.data.message.studentClasses.length; i++) {
          if (listClass.data.message.studentClasses[i].DeletedAt == null) {
            classArr.push(listClass.data.message.studentClasses[i]);
          }
        }
      }
      setClasses(classArr);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeClass = (id) => {
    console.log(id);
    localStorage.setItem("classID", id);
  };

  return (
    <div className="wrapped">
      <div className="basic-nav">
        <ul className="nav nav-pills flex-column mx">
          {sideBar["basicLink"].map(function (link, i) {
            return (
              <NavLink to={link} className="nav-link">
                {sideBar["basicIcon"][i]} {sideBar["basicLinkName"][i]}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="advance-nav">
        <ul className="nav nav-pills flex-column ">
          {classes?.map((classInfo, index) => {
            if (index <= 5 && classID.toString() !== classInfo.ID.toString()) {
              return (
                <Link
                  className="nav-link"
                  onClick={() => changeClass(classInfo.ID)}
                  to={`/class/${classInfo.ID}/posts`}
                >
                  <ClassIcon /> {classInfo.ClassName}
                </Link>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
