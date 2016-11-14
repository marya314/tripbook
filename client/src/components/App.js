import React from 'react';
import NavBar from './nav_bar';
import TripIndex from './trip_index'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TripIndex />
      </div>
    );
  }
}
