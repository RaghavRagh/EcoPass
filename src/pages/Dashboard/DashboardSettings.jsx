import {
    AreaTop,
    Sidebar,
  } from "../../components";
import UserProfile from "../../components/UserProfile/UserProfile";
  import { SidebarProvider } from "../../context/SidebarContext";
  //import NavBar from "../../components/NavBar/NavBar";
  import "./Dashboard.scss";

const DashboardSettings = () => {
  return (
    <>
      <SidebarProvider>
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-content">
            {/* <NavBar /> */}
            {/* Additional dashboard content can be added here */}
            <AreaTop />
            <div className="content-area">
              <UserProfile />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}

export default DashboardSettings
