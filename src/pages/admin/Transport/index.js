import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Document from './Document';
import Fuel from './Fuel';
import Log from './Log';
import Report from './Report';
import ServiceRecord from './ServiceRecord';
import TransportRoute from './TransportRoute';
import Vehicle from './Vehicle';
import VehicleIncharge from './VehicleIncharge';


export default function index() {
    const baseroute='/admin/transport/';
    return (
        <Switch>
            <Route path={baseroute+'document'} component={Document}/>
            <Route path={baseroute+'fuel'} component={Fuel}/>
            <Route path={baseroute+'log'} component={Log}/>
            <Route path={baseroute+'report'} component={Report}/>
            <Route path={baseroute+'servicerecord'} component={ServiceRecord}/>
            <Route path={baseroute+'transportroute'} component={TransportRoute}/>
            <Route path={baseroute+'vehicle'} component={Vehicle}/>
            <Route path={baseroute+'vehicleincharge'} component={VehicleIncharge}/>
           
          
        </Switch>
    )
}
