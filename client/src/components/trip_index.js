import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'
import { fetchTrips } from '../actions/index';


 class TripIndex extends React.Component {

    //  ADD_TRIPS

    componentDidMount(){
        this.props.fetchTrips()
    }

    render() {
        return (
            <div className="col-md-4" id="trip-index">
                <h2>My Trips</h2>
                <ul>
                    {this.props.trips.map(trip => <Link to={`/trips/${trip.id}`}>
                        <li key={trip.id}>{trip.name}</li></Link>)}
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
        fetchTrips: bindActionCreators(fetchTrips, dispatch)
    }
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(TripIndex);
