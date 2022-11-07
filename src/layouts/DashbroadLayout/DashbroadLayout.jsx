import Sidebar from "../../components/Sidebar/sidebar.jsx";
import Header from "../../components/header/header.jsx";
import "./dashbroadLayout.css";

const DashbroadLayout = (props) => {
  return (
    <Header>
      <div className="sidebar-section">
        <div className="_sidebar">
          <Sidebar info={props.sideBar} />
        </div>
        <div className="section">{props.children}</div>
      </div>
    </Header>
  );
};

export default DashbroadLayout;
