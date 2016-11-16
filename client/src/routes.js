import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import TripNew from './components/trip_new';
import TripIndex from './components/trip_index';
import TripDetail from './components/trip_detail';

export default (
    <Route path="/" component={ App } >
        <Route path="/trips/new" component={ TripNew } />
        <Route path="/trips" component={ TripIndex }>
            <Route path="/trips/:id" component={ TripDetail } />
        </Route>
    </Route>
)
