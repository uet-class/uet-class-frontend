import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header.jsx";
import "./DashbroadLayout.css";

const DashbroadLayout = (props) => {
  var links = ["./home", "./assignments"];
  var classes = ["Tương tác người máy", "XSTK"];
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
