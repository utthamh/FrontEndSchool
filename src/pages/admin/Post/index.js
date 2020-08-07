import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from './Feed';
import Article from './Article';




export default function index() {
    const baseroute='/admin/post/';
    return (
        <Switch>
            <Route path={baseroute+'article'} component={Article}/>
            <Route path={baseroute+'feed'} component={Feed}/>
            
           
          
        </Switch>
    )
}
