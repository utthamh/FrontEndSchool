import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Celebration from './Celebration';
import Events from './Events';
import Holiday from './Holiday';


export default function index() {
    const baseroute='/admin/calendar/';
    return (
        <Switch>
            <Route path={baseroute+'events'} component={Events}/>
            <Route path={baseroute+'holiday'} component={Holiday}/>
            <Route path={baseroute+'celebration'} component={Celebration}/>
          
        </Switch>
    )
}
