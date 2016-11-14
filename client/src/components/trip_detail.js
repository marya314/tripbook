import React from 'react';
import { connect } from 'react-redux';

function TripDetail(props){
        return (
            <div className="col-md-8" id="trip-detail">

                <h3>{props.trip.name}</h3>
                <li>{props.trip.description}</li>
                {props.trip.locations.map(location =>{
                    return <li>{location.name}</li>
                })}
                <li>{props.trip.start_date}</li>
                <li>{props.trip.end_date}</li>

            </div>
        )
};

function mapStateToProps(state, ownProps) {
        const trip = state.trips.find((trip) => return {trip.id === ownProps.params.id})
        return {trip: trip}

}

export default connect(mapStateToProps, TripDetail)
