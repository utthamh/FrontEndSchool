import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AcademicsSessions from './AcademicsSessions';
import Batch from './Batch';
import Certificate from './Certificate';
import ClassTeacher from './ClassTeacher';
import ClassTiming from './ClassTiming';
import Course from './Course';
import Subject from './Subject';
import SubjectTeacher from './SubjectTeacher';
import TimeTable from './TimeTable';

export default function index() {
    const baseroute='/admin/academics/';
    return (
        <Switch>
            <Route path={baseroute+'academicsession'} component={AcademicsSessions}/>
            <Route path={baseroute+'batch'} component={Batch}/>
            <Route path={baseroute+'certificate'} component={Certificate}/>
            <Route path={baseroute+'classteacher'} component={ClassTeacher}/>
            <Route path={baseroute+'classtiming'} component={ClassTiming}/>
            <Route path={baseroute+'course'} component={Course}/>
            <Route path={baseroute+'subject'} component={Subject}/>
            <Route path={baseroute+'subjectteacher'} component={SubjectTeacher}/>
            <Route path={baseroute+'timetable'} component={TimeTable}/>
        </Switch>
    )
}
