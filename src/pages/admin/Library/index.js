import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Return from './Return';
import Issue from './Issue';
import Books from './Books';

export default function index() {
    const baseroute='/admin/library/';
    return (
        <Switch>
            <Route path={baseroute+'book'} component={Books}/>
            <Route path={baseroute+'issue'} component={Issue}/>
            <Route path={baseroute+'return'} component={Return}/>
          
           
          
        </Switch>
    )
}
