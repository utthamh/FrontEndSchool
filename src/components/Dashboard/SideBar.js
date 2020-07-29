import React from "react";
import SidebarUser from "./SidebarUser";
import { admindata } from "../../Data/AdminSideNavData";
import SidebarListItem from "./SidebarListItem";

export default function SideBar() {
  return (
    <div className="sidebar " data-background-color="dark">
      <div className=" sidebar-wrapper " style={{ position: "relative" }}>
        <div className="sidebar-content" >
          <SidebarUser />
          <ul className="nav nav-secondary ">
            {admindata &&
              admindata.length > 0 &&
              admindata.map((item) => <SidebarListItem {...item} />)}
          </ul>
        </div>
      </div>

<div className="scroll-element scroll-y scroll-scrolly_visible" style={{}}>
  <div className="scroll-element_outer">
    <div className="scroll-element_size" />
    <div className="scroll-element_track" />
    <div className="scroll-bar ui-draggable ui-draggable-handle" style={{height: 133, top: '64.3411px'}} />
  </div>
</div>

    </div>
  );
}
