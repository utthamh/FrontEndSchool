import React from "react";
import NavBar from "../../components/Dashboard/NavBar";
import SideBar from "../../components/Dashboard/SideBar";
import { Switch,Route } from "react-router-dom";
import InstituteDocument from "./InstituteDocument";
import Academics from "./Academics";
import Calendar from "./Calendar";
import Communication from "./Communication";
import Transport from "./Transport";
import Employee from "./Employee";
import Exam from "./Exam";
import Finance from "./Finance";
import Inventory from "./Inventory";
import Library from "./Library";
import Post from "./Post";
import Reception from "./Reception";
import Resource from "./Resource";
import Student from "./Student";


export default function index() {
  const baseroute='/admin/';
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="main-panel">
        <div className="content">
          <div className="page-inner">
            <div className="page-header">
              <h4 className="page-title"> Admin Dashboard</h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Switch>
                <Route path={baseroute+'institutedoc'} component={InstituteDocument}/>
                <Route path={baseroute+'academics'} component={Academics}/>
                <Route path={baseroute+'calendar'} component={Calendar}/>
                <Route path={baseroute+'communication'} component={Communication}/>
                <Route path={baseroute+'transport'} component={Transport}/>
                <Route path={baseroute+'employee'} component={Employee}/>
                <Route path={baseroute+'exam'} component={Exam}/>
                <Route path={baseroute+'inventory'} component={Inventory}/>
                <Route path={baseroute+'finance'} component={Finance}/>
                <Route path={baseroute+'library'} component={Library}/>
                <Route path={baseroute+'post'} component={Post}/>
                <Route path={baseroute+'reception'} component={Reception}/>
                <Route path={baseroute+'resource'} component={Resource}/>
                <Route path={baseroute+'student'} component={Student}/>
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
