import "./Sidebar.css";
import monitor from "../../../assets/Group 537@3x.png";
import home from "../../../assets/Group 538@3x.png";
import people from "../../../assets/Group 548@3x.png";
import camera from "../../../assets/Group 563@3x.png";
import bag from "../../../assets/Group 549@3x.png";
import pc from "../../../assets/Group 555@3x.png";
import user from "../../../assets/Group 565@3x.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <img width="50" src={monitor} alt="monitor" />
        </div>
        <div className="sidebar__link">
          <img width="50" src={home} alt="home" />
        </div>
        <div className="sidebar__link">
          <img width="50" src={camera} alt="camera" />
        </div>
        <div className="sidebar__link">
          <img width="50" src={people} alt="people" />
        </div>
        <div className="sidebar__link">
          <img width="50" src={bag} alt="bag" />
        </div>
        <div className="sidebar__link">
          <img width="50" src={pc} alt="pc" />
        </div>
        <div className="sidebar__bottom">
          <img width="50" src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
