import DashbroadLayout from "../../layouts/DashbroadLayout/DashbroadLayout";
import "./assignments.css";
import HomeIcon from "../../components/Icon/newsIcon";
import NewsIcon from "../../components/Icon/newsIcon";
import DocumentIcon from "../../components/Icon/documentIcon";
import HomeworkIcon from "../../components/Icon/homeworkIcon";
import OtherIcon from "../../components/Icon/otherIcon";

const Assignments = () => {
  var sideBar = {};
  sideBar.classLinks = ["/home", "/assignments"];
  sideBar.classes = ["Tương tác người máy", "Xác suất thống kê"];
  sideBar.basicLink = [
    "/home",
    "/news",
    "/documents",
    "/assignments",
    "/other",
  ];
  sideBar.basicLinkName = [
    "Trang chủ",
    "Bảng tin",
    "Tài Tài liệu",
    "Bài tập",
    "Khác",
  ];
  sideBar.basicIcon = [
    <HomeIcon />,
    <NewsIcon />,
    <DocumentIcon />,
    <HomeworkIcon />,
    <OtherIcon />,
  ];
  return (
    <DashbroadLayout sideBar={sideBar}>
      <div>
        <h1 className="content">This is the assignments page</h1>
      </div>
    </DashbroadLayout>
  );
};

export default Assignments;
