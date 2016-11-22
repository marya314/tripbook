import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import SignUp from './components/sign_up'
import LogIn from './components/login';
import TripNew from './components/trip_new';
import TripIndex from './components/trip_index';
import TripDetail from './components/trip_detail';
import LocationNew from './components/location_new';

export default (
    <Route path="/" component={ App } >
        <Route path='/login' component={ LogIn } />
        <Route path='/signup' component={ SignUp } />
        <Route path="/trips/new" component={ TripNew } />
        <Route path="/locations/new" component={ LocationNew } />
        <Route path="/trips" component={ TripIndex } onEnter={requireAuth} >
            <Route path="/trips/:id" component={ TripDetail } />
        </Route>
    </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
