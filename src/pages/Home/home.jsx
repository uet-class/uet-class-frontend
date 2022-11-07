import "./home.css";
import DashbroadLayout from "../../layouts/DashbroadLayout/DashbroadLayout";
import HomeIcon from "../../components/Icon/HomeIcon";
import NewsIcon from "../../components/Icon/NewsIcon";
import DocumentIcon from "../../components/Icon/DocumentIcon";
import HomeworkIcon from "../../components/Icon/HomeworkIcon";
import OtherIcon from "../../components/Icon/OtherIcon";

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
