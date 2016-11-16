import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../actions/index';


 class TripIndex extends React.Component {

    componentDidMount(){
        this.props.fetchTrips()
    }

    render() {
        return (
            <div className="col-md-4" id="trip-index">
                <h2>My Trips</h2>
                <div className="test-xs-left">
                    <Link to="/trips/new" className="btn btn-primary">
                        Add A Trip
                    </Link>
                </div>
                <br></br>
                <ul>    
                    {this.props.trips.map(trip => <Link to={`/trips/${trip.id}`} key={trip.id}>
                        <li >{trip.name}</li></Link>)}
                </ul>
                {this.props.children}
            </div>
        )
    }
};

function mapStateToProps(state){
    return {
        trips: state.trips
    }
}

function mapDispatchToProps(dispatch){
    return {
        //fetchTrips is a key on prop, its value is a function. therefore, we can call it up top.
        fetchTrips: bindActionCreators(fetchTrips, dispatch)
    }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(TripIndex);
