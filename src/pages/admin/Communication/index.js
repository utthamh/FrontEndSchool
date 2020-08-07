import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Email from './Email';
import History from './History';
import Meetings from './Meetings';
import MyMeetings from './MyMeetings';
import MyNotifications from './MyNotifications';
import PushNotification from './PushNotification';
import Sms from './Sms';


export default function index() {
    const baseroute='/admin/communication/';
    return (
        <Switch>
            <Route path={baseroute+'email'} component={Email}/>
            <Route path={baseroute+'history'} component={History}/>
            <Route path={baseroute+'meetings'} component={Meetings}/>
            <Route path={baseroute+'mymeetings'} component={MyMeetings}/>
            <Route path={baseroute+'mynotifications'} component={MyNotifications}/>
            <Route path={baseroute+'pushnotification'} component={PushNotification}/>
            <Route path={baseroute+'sms'} component={Sms}/>
            
            
        </Switch>
    )
}
