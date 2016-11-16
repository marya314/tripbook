import React from 'react';
import { connect } from 'react-redux';

function TripDetail(props){
        return (
            <div className="col-md-8" id="trip-detail">
{console.log(props)}
                <h3>{props.trip.name}</h3>
                <li><b>Description:</b> {props.trip.description}</li>
                {props.trip.locations.map(location =>{
                    return <li><b>Locations:</b> {location.name}</li>
                })}
                <li><b>Start Date:</b> {props.trip.start_date}</li>
                <li><b>End Date:</b> {props.trip.end_date}</li>

            </div>
        )
};

function mapStateToProps(state, ownProps) {
    console.log(state)
    //where trip_id matches url id
        const trip = state.trips.find((trip) => {return trip.id === parseInt(ownProps.params.id)})
        return {trip: trip}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(TripDetail)
