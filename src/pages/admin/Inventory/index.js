import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Vendor from './Vendor';
import Transfer from './Transfer';
import StockItem from './StockItem';
import StockCategory from './StockCategory';
import Purchase from './Purchase';

export default function index() {
    const baseroute='/admin/inventory/';
    return (
        <Switch>
            <Route path={baseroute+'purchase'} component={Purchase}/>
            <Route path={baseroute+'stockcategory'} component={StockCategory}/>
            <Route path={baseroute+'stockitem'} component={StockItem}/>
            <Route path={baseroute+'transfer'} component={Transfer}/>
            <Route path={baseroute+'vendor'} component={Vendor}/>
           
           
          
        </Switch>
    )
}
