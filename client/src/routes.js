import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import TripIndex from './components/trip_index';

export default (
    <Route path="/" component={ App } >
        <Route path="/trips" component={ TripIndex }>
        </Route>
    </Route>
)
