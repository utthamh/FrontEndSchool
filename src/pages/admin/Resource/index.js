import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Assignment from './Assignment';
import LessonPlan from './LessonPlan';
import Notes from './Notes';
import Syllabus from './Syllabus';



export default function index() {
    const baseroute='/admin/resource/';
    return (
        <Switch>
            <Route path={baseroute+'assignment'} component={Assignment}/>
            <Route path={baseroute+'lessonplan'} component={LessonPlan}/>
            <Route path={baseroute+'notes'} component={Notes}/>
            <Route path={baseroute+'syllabus'} component={Syllabus}/>
        </Switch>
    )
}
