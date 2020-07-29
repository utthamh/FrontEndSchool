import React from 'react'
import Img from '../../images/trainer-1.jpg'
export default function SidebarUser() {
    return (
        <div className="user">
        <div className="avatar-sm float-left mr-2">
          <img src={Img} alt="..." className="avatar-img rounded-circle" />
        </div>
        <div className="info">
          <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
            <span>
              Hizrian
              <span className="user-level">Administrator</span>
              <span className="caret" />
            </span>
          </a>
          <div className="clearfix" />
          <div className="collapse in" id="collapseExample">
            <ul className="nav">
              <li>
                <a href="#profile">
                  <span className="link-collapse">My Profile</span>
                </a>
              </li>
              <li>
                <a href="#edit">
                  <span className="link-collapse">Edit Profile</span>
                </a>
              </li>
              <li>
                <a href="#settings">
                  <span className="link-collapse">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
