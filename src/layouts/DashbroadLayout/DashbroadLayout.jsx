import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import "./DashbroadLayout.css";

const DashbroadLayout = (props) => {
  return (
    <Header>
      <div className="sidebar-section">
        <div className="_sidebar">
          <Sidebar />
        </div>
        <div className="section">{props.children}</div>
      </div>
    </Header>
  );
};

export default DashbroadLayout;
