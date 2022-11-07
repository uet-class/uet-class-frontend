import "./home.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/dashbroadLayout";
import HomeIcon from "../Icon/homeIcon";
import NewsIcon from "../Icon/newsIcon";
import DocumentIcon from "../Icon/documentIcon";
import HomeworkIcon from "../Icon/homeworkIcon";
import OtherIcon from "../Icon/otherIcon";

const Home = () => {
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
      <h1 className="content">This is the home page</h1>
    </DashbroadLayout>
  );
};

export default Home;
