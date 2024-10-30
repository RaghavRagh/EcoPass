
import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";

import ProfilePic from "../../../assets/avatar.png";

const AreaTop = () => {

  const { openSidebar } = useContext(SidebarContext);

  return (
    <section className="dashboard-navbar">
      <div className="navbar-left">
      <button className="sidebar-open-btn" type="button" onClick={openSidebar}>
      <MdOutlineMenu size={30} />
    </button>
        <h2 className="db-navbar-title">Dashboard</h2>
      </div>

      <div className="navbar-right">
        {/* Profile section */}
        <div className="profile-wrapper">
          <img
            src={ProfilePic} // Placeholder image, replace with actual profile image URL
            alt="Profile"
            className="profile-image"
          />
          <span className="username">Username</span>
        </div>
      </div>
    </section>

  )
}

export default AreaTop;
