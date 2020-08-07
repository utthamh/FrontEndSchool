import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ExamSchedule from './ExamSchedule';
import OnlineExam from './OnlineExam';
import RecordMarks from './RecordMarks';
import ReportAnalysis from './ReportAnalysis';
import ReportCard from './ReportCard';
import TopperReport from './TopperReport';



export default function index() {
    const baseroute='/admin/exam/';
    return (
        <Switch>
            <Route path={baseroute+'examschedule'} component={ExamSchedule}/>
            <Route path={baseroute+'onlineexam'} component={OnlineExam}/>
            <Route path={baseroute+'recordmarks'} component={RecordMarks}/>
            <Route path={baseroute+'reportanalysis'} component={ReportAnalysis}/>
            <Route path={baseroute+'reportcard'} component={ReportCard}/>
            <Route path={baseroute+'topperreport'} component={TopperReport}/>
           
           
          
        </Switch>
    )
}
