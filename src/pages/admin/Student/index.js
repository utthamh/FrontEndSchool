import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Termination from './Termination';
import StudentList from './StudentList';
import StudentImport from './StudentImport';
import StudentParentLogin from './Student-ParentLogin';
import RollNo from './RollNo';
import Registration from './Registration';
import Promotion from './Promotion';
import Parent from './Parent';
import ImageUpload from './ImageUpload';
import IdCard from './IdCard';
import FeePayment from './FeePayment';
import Attendence from './Attendence';


export default function index() {
    const baseroute='/admin/student/';
    return (
        <Switch>
            <Route path={baseroute+'attendence'} component={Attendence}/>
            <Route path={baseroute+'feepayment'} component={FeePayment}/>
            <Route path={baseroute+'idcard'} component={IdCard}/>
            <Route path={baseroute+'imageupload'} component={ImageUpload}/>
            <Route path={baseroute+'parent'} component={Parent}/>
            <Route path={baseroute+'promotion'} component={Promotion}/>
            <Route path={baseroute+'registration'} component={Registration}/>
            <Route path={baseroute+'rollno'} component={RollNo}/>
            <Route path={baseroute+'studentparentlogin'} component={StudentParentLogin}/>
            <Route path={baseroute+'studentimport'} component={StudentImport}/>
            <Route path={baseroute+'studentlist'} component={StudentList}/>
            <Route path={baseroute+'termination'} component={Termination}/>
          
        </Switch>
    )
}
