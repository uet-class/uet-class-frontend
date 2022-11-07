import "./Home.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/DashbroadLayout";
import HomeIcon from "../Icon/HomeIcon";
import NewsIcon from "../Icon/NewsIcon";
import DocumentIcon from "../Icon/DocumentIcon";
import HomeworkIcon from "../Icon/HomeworkIcon";
import OtherIcon from "../Icon/OtherIcon";

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
