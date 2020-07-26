import React from 'react'
import Img from '../../images/trainer-1.jpg'
export default function Navbar() {
    return (
<div className="main-header">
  {/* Logo Header */}
  <div className="logo-header" data-background-color="purple">
    <a href="index-2.html" className="logo text-white font-weight-bold">
      <div>DashBoard</div>
    
    </a>
    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
        <i className="fa fa-bars" />
      </span>
    </button>
    <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
    <div className="nav-toggle">
      <button className="btn btn-toggle toggle-sidebar">
        <i className="fa fa-bars" />
      </button>
    </div>
  </div>
  {/* End Logo Header */}
  {/* Navbar Header */}
  <nav className="navbar navbar-header navbar-expand-lg" data-background-color="purple2">
    <div className="container-fluid">
      <div className="collapse" id="search-nav">
        <form className="navbar-left navbar-form nav-search mr-md-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <button type="submit" className="btn btn-search pr-1">
                <i className="fa fa-search search-icon" />
              </button>
            </div>
            <input type="text" placeholder="Search ..." className="form-control" />
          </div>
        </form>
      </div>
      <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
        <li className="nav-item toggle-nav-search hidden-caret">
          <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
            <i className="fa fa-search" />
          </a>
        </li>
        <li className="nav-item dropdown hidden-caret">
          <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-envelope" />
          </a>
          <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
            <li>
              <div className="dropdown-title d-flex justify-content-between align-items-center">
                Messages 									
                <a href="#" className="small">Mark all as read</a>
              </div>
            </li>
            <li>
              <div className="scroll-wrapper message-notif-scroll scrollbar-outer" style={{position: 'relative'}}><div className="message-notif-scroll scrollbar-outer scroll-content" style={{height: 'auto', marginBottom: 0, marginRight: 0, maxHeight: 0}}>
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-img"> 
                        <img src={Img} alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jimmy Denis</span>
                        <span className="block">
                          How are you ?
                        </span>
                        <span className="time">5 minutes ago</span> 
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img"> 
                        <img src="../assets/img/chadengle.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Chad</span>
                        <span className="block">
                          Ok, Thanks !
                        </span>
                        <span className="time">12 minutes ago</span> 
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img"> 
                        <img src="../assets/img/mlane.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jhon Doe</span>
                        <span className="block">
                          Ready for the meeting today...
                        </span>
                        <span className="time">12 minutes ago</span> 
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img"> 
                        <img src="../assets/img/talha.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Talha</span>
                        <span className="block">
                          Hi, Apa Kabar ?
                        </span>
                        <span className="time">17 minutes ago</span> 
                      </div>
                    </a>
                  </div>
                </div><div className="scroll-element scroll-x" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" /></div></div><div className="scroll-element scroll-y" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" /></div></div></div>
            </li>
            <li>
              <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right" /> </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown hidden-caret submenu">
          <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-bell" />
            <span className="notification">4</span>
          </a>
          <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
            <li>
              <div className="dropdown-title">You have 4 new notification</div>
            </li>
            <li>
              <div className="scroll-wrapper notif-scroll scrollbar-outer" style={{position: 'relative'}}><div className="notif-scroll scrollbar-outer scroll-content" style={{height: 'auto', marginBottom: 0, marginRight: 0, maxHeight: 256}}>
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                      <div className="notif-content">
                        <span className="block">
                          New user registered
                        </span>
                        <span className="time">5 minutes ago</span> 
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-success"> <i className="fa fa-comment" /> </div>
                      <div className="notif-content">
                        <span className="block">
                          Rahmad commented on Admin
                        </span>
                        <span className="time">12 minutes ago</span> 
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img"> 
                        <img src="../assets/img/profile2.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="block">
                          Reza send messages to you
                        </span>
                        <span className="time">12 minutes ago</span> 
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-danger"> <i className="fa fa-heart" /> </div>
                      <div className="notif-content">
                        <span className="block">
                          Farrah liked Admin
                        </span>
                        <span className="time">17 minutes ago</span> 
                      </div>
                    </a>
                  </div>
                </div><div className="scroll-element scroll-x" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" style={{width: 100}} /></div></div><div className="scroll-element scroll-y" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" style={{height: 100}} /></div></div></div>
            </li>
            <li>
              <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" /> </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown hidden-caret submenu">
          <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
            <div className="avatar-sm">
              <img src={Img} alt="..." className="avatar-img rounded-circle" />
            </div>
          </a>
          <ul className="dropdown-menu dropdown-user animated fadeIn">
            <div className="scroll-wrapper dropdown-user-scroll scrollbar-outer" style={{position: 'relative'}}><div className="dropdown-user-scroll scrollbar-outer scroll-content" style={{height: '272.2px', marginBottom: 0, marginRight: 0, maxHeight: 'none'}}>
                <li>
                  <div className="user-box">
                    <div className="avatar-lg"><img src={Img} alt="image profile" className="avatar-img rounded" /></div>
                    <div className="u-text">
                      <h4>Hizrian</h4>
                      <p className="text-muted">hello@example.com</p><a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">My Profile</a>
                  <a className="dropdown-item" href="#">My Balance</a>
                  <a className="dropdown-item" href="#">Inbox</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Account Setting</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </div><div className="scroll-element scroll-x" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" style={{width: 100}} /></div></div><div className="scroll-element scroll-y" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" style={{height: 100}} /></div></div></div>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link quick-sidebar-toggler toggled">
            <i className="fa fa-th" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/* End Navbar */}
</div>

    )
}
