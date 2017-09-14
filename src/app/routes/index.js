import React from 'react';
import Test from '../Test';
import TestKey from '../TestKey';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const routes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/test">test</Link></li>
                <li><Link to="/testkey">testkey</Link></li>
            </ul>
            <Route path="/test" component={ Test }></Route>
            <Route path="/testkey" component={ TestKey }></Route>
        </div>
    </Router>
);

export default routes;
