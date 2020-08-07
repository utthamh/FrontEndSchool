import React from 'react'
import { Switch, Route } from 'react-router-dom'
import VisitorMessage from './VisitorMessage';
import VisitorLog from './VisitorLog';
import PostalRecord from './PostalRecord';
import Gatepass from './Gatepass';
import Complaint from './Complaint';
import AdmissionEnqiry from './AdmissionEnqiry';
import CallLog from './CallLog';



export default function index() {
    const baseroute='/admin/reception/';
    return (
        <Switch>
            <Route path={baseroute+'admissionenquiry'} component={AdmissionEnqiry}/>
            <Route path={baseroute+'complaint'} component={Complaint}/>
            <Route path={baseroute+'gatepass'} component={Gatepass}/>
            <Route path={baseroute+'postalrecord'} component={PostalRecord}/>
            <Route path={baseroute+'visitorlog'} component={VisitorLog}/>
            <Route path={baseroute+'visitormessage'} component={VisitorMessage}/>
            <Route path={baseroute+'calllog'} component={CallLog}/>
           
          
        </Switch>
    )
}
