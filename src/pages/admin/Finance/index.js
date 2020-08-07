import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TransportFee from './TransportFee';
import Report from './Report';
import Income from './Income';
import FeeHead from './FeeHead';
import FeeGroup from './FeeGroup';
import FeeCommision from './FeeCommision';
import FeeAllocation from './FeeAllocation';
import Expense from './Expense';
import AccountTransfer from './AccountTransfer';
import Account from './Account';




export default function index() {
    const baseroute='/admin/finance/';
    return (
        <Switch>
            <Route path={baseroute+'account'} component={Account}/>
            <Route path={baseroute+'accounttransfer'} component={AccountTransfer}/>
            <Route path={baseroute+'expense'} component={Expense}/>
            <Route path={baseroute+'feeallocation'} component={FeeAllocation}/>
            <Route path={baseroute+'feecommission'} component={FeeCommision}/>
            <Route path={baseroute+'feegroup'} component={FeeGroup}/>
            <Route path={baseroute+'feehead'} component={FeeHead}/>
            <Route path={baseroute+'income'} component={Income}/>
            <Route path={baseroute+'report'} component={Report}/>
            <Route path={baseroute+'transportfee'} component={TransportFee}/>
          
        </Switch>
    )
}
