import React from 'react'
import LandingPage from '../pages/LandingPage'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import AdminDashboard from '../pages/admin'
export default function index() {
    return (
        <Switch>
            <Route path='/admin' component={AdminDashboard}/>
            <Route path='/login' component={Login}/>
            <Route path='/' component={LandingPage}/>
        </Switch>
    )
}
