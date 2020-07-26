import React from 'react'

export default function SideBar() {
    return (
<div className="sidebar">			
  <div className="scroll-wrapper sidebar-wrapper scrollbar scrollbar-inner" style={{position: 'relative'}}><div className="sidebar-wrapper scrollbar scrollbar-inner scroll-content scroll-scrolly_visible" style={{height: 'auto', marginBottom: 0, marginRight: 0, maxHeight: '352.4px'}}>
      <div className="sidebar-content">
        <div className="user">
          <div className="avatar-sm float-left mr-2">
            <img src="../assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
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
        <ul className="nav nav-secondary">
          <li className="nav-item active">
            <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
              <i className="fas fa-home" />
              <p>Dashboard</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="dashboard">
              <ul className="nav nav-collapse">
                <li>
                  <a href="index-2.html">
                    <span className="sub-item">Dashboard 1</span>
                  </a>
                </li>
                <li>
                  <a href="../demo2/index-2.html">
                    <span className="sub-item">Dashboard 2</span>
                  </a>
                </li>
                <li>
                  <a href="../demo3/index-2.html">
                    <span className="sub-item">Dashboard 3</span>
                  </a>
                </li>
                <li>
                  <a href="../demo4/index-2.html">
                    <span className="sub-item">Dashboard 4</span>
                  </a>
                </li>
                <li>
                  <a href="../demo5/index-2.html">
                    <span className="sub-item">Dashboard 5</span>
                  </a>
                </li>
                <li>
                  <a href="../demo6/index-2.html">
                    <span className="sub-item">Dashboard 6</span>
                  </a>
                </li>
                <li>
                  <a href="../demo7/index-2.html">
                    <span className="sub-item">Dashboard 7</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="fa fa-ellipsis-h" />
            </span>
            <h4 className="text-section">Components</h4>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#base">
              <i className="fas fa-layer-group" />
              <p>Base</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="base">
              <ul className="nav nav-collapse">
                <li>
                  <a href="components/avatars.html">
                    <span className="sub-item">Avatars</span>
                  </a>
                </li>
                <li>
                  <a href="components/buttons.html">
                    <span className="sub-item">Buttons</span>
                  </a>
                </li>
                <li>
                  <a href="components/gridsystem.html">
                    <span className="sub-item">Grid System</span>
                  </a>
                </li>
                <li>
                  <a href="components/panels.html">
                    <span className="sub-item">Panels</span>
                  </a>
                </li>
                <li>
                  <a href="components/notifications.html">
                    <span className="sub-item">Notifications</span>
                  </a>
                </li>
                <li>
                  <a href="components/sweetalert.html">
                    <span className="sub-item">Sweet Alert</span>
                  </a>
                </li>
                <li>
                  <a href="components/font-awesome-icons.html">
                    <span className="sub-item">Font Awesome Icons</span>
                  </a>
                </li>
                <li>
                  <a href="components/simple-line-icons.html">
                    <span className="sub-item">Simple Line Icons</span>
                  </a>
                </li>
                <li>
                  <a href="components/flaticons.html">
                    <span className="sub-item">Flaticons</span>
                  </a>
                </li>
                <li>
                  <a href="components/typography.html">
                    <span className="sub-item">Typography</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#forms">
              <i className="fas fa-pen-square" />
              <p>Forms</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="forms">
              <ul className="nav nav-collapse">
                <li>
                  <a href="forms/forms.html">
                    <span className="sub-item">Basic Form</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formvalidation.html">
                    <span className="sub-item">Form Validation</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwidget.html">
                    <span className="sub-item">Form Widget</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwizard.html">
                    <span className="sub-item">Form Wizard</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formupload.html">
                    <span className="sub-item">Multiple Upload</span>
                  </a>
                </li>
                <li>
                  <a href="forms/formwysiwyg.html">
                    <span className="sub-item">WYSIWYG Editor</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#tables">
              <i className="fas fa-table" />
              <p>Tables</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="tables">
              <ul className="nav nav-collapse">
                <li>
                  <a href="tables/tables.html">
                    <span className="sub-item">Basic Table</span>
                  </a>
                </li>
                <li>
                  <a href="tables/datatables.html">
                    <span className="sub-item">Datatables</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#maps">
              <i className="fas fa-map-marker-alt" />
              <p>Maps</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="maps">
              <ul className="nav nav-collapse">
                <li>
                  <a href="maps/googlemaps.html">
                    <span className="sub-item">Google Maps</span>
                  </a>
                </li>
                <li>
                  <a href="maps/fullscreenmaps.html">
                    <span className="sub-item">Full Screen Maps</span>
                  </a>
                </li>
                <li>
                  <a href="maps/jqvmap.html">
                    <span className="sub-item">JQVMap</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#charts">
              <i className="far fa-chart-bar" />
              <p>Charts</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="charts">
              <ul className="nav nav-collapse">
                <li>
                  <a href="charts/charts.html">
                    <span className="sub-item">Chart Js</span>
                  </a>
                </li>
                <li>
                  <a href="charts/sparkline.html">
                    <span className="sub-item">Sparkline</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="calendar.html">
              <i className="far fa-calendar-alt" />
              <p>Calendar</p>
              <span className="badge badge-info">1</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="widgets.html">
              <i className="fas fa-desktop" />
              <p>Widgets</p>
              <span className="badge badge-success">4</span>
            </a>
          </li>
          <li className="nav-section">
            <span className="sidebar-mini-icon">
              <i className="fa fa-ellipsis-h" />
            </span>
            <h4 className="text-section">Snippets</h4>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#email-nav">
              <i className="far fa-envelope" />
              <p>Email</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="email-nav">
              <ul className="nav nav-collapse">
                <li>
                  <a href="email-inbox.html">
                    <span className="sub-item">Inbox</span>
                  </a>
                </li>
                <li>
                  <a href="email-compose.html">
                    <span className="sub-item">Email Compose</span>
                  </a>
                </li>
                <li>
                  <a href="email-detail.html">
                    <span className="sub-item">Email Detail</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#messages-app-nav">
              <i className="far fa-paper-plane" />
              <p>Messages App</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="messages-app-nav">
              <ul className="nav nav-collapse">
                <li>
                  <a href="messages.html">
                    <span className="sub-item">Messages</span>
                  </a>
                </li>
                <li>
                  <a href="conversations.html">
                    <span className="sub-item">Conversations</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="projects.html">
              <i className="fas fa-file-signature" />
              <p>Projects</p>
              <span className="badge badge-count">5</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="boards.html">
              <i className="fas fa-th-list" />
              <p>Boards</p>
              <span className="badge badge-count">4</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="invoice.html">
              <i className="fas fa-file-invoice-dollar" />
              <p>Invoices</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="pricing.html">
              <i className="fas fa-tag" />
              <p>Pricing</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="faqs.html">
              <i className="far fa-question-circle" />
              <p>Faqs</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#custompages">
              <i className="fas fa-paint-roller" />
              <p>Custom Pages</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="custompages">
              <ul className="nav nav-collapse">
                <li>
                  <a href="login.html">
                    <span className="sub-item">Login &amp; Register 1</span>
                  </a>
                </li>
                <li>
                  <a href="login2.html">
                    <span className="sub-item">Login &amp; Register 2</span>
                  </a>
                </li>
                <li>
                  <a href="login3.html">
                    <span className="sub-item">Login &amp; Register 3</span>
                  </a>
                </li>
                <li>
                  <a href="userprofile.html">
                    <span className="sub-item">User Profile</span>
                  </a>
                </li>
                <li>
                  <a href="404.html">
                    <span className="sub-item">404</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a data-toggle="collapse" href="#submenu">
              <i className="fas fa-bars" />
              <p>Menu Levels</p>
              <span className="caret" />
            </a>
            <div className="collapse" id="submenu">
              <ul className="nav nav-collapse">
                <li>
                  <a data-toggle="collapse" href="#subnav1">
                    <span className="sub-item">Level 1</span>
                    <span className="caret" />
                  </a>
                  <div className="collapse" id="subnav1">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a data-toggle="collapse" href="#subnav2">
                    <span className="sub-item">Level 1</span>
                    <span className="caret" />
                  </a>
                  <div className="collapse" id="subnav2">
                    <ul className="nav nav-collapse subnav">
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span className="sub-item">Level 1</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div><div className="scroll-element scroll-x scroll-scrolly_visible" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" style={{width: 88}} /></div></div><div className="scroll-element scroll-y scroll-scrolly_visible" style={{}}><div className="scroll-element_outer"><div className="scroll-element_size" /><div className="scroll-element_track" /><div className="scroll-bar ui-draggable ui-draggable-handle" style={{height: 133, top: 0}} /></div></div></div>
</div>

    )
}
