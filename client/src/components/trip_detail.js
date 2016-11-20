import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function TripDetail(props){
        return (
            <div className="col-md-8" id="trip-detail">
                <h3>{props.trip.name}</h3>
                <li><b>Description:</b> {props.trip.description}</li>
                {props.trip.locations.map(location =>{
                    return <li><b>Locations:</b> {location.name}</li>
                })}
                <li><b>Start Date:</b> {props.trip.start_date}</li>
                <li><b>End Date:</b> {props.trip.end_date}</li>

                <div>
                <Link to="/locations/new" className="btn btn-primary">
                    Add A Location
                </Link>
                    <button className="btn btn-primary">Add An Activity</button>
                    <button className="btn btn-primary">Add A Photo</button>
                </div>
            </div>
        )
};

function mapStateToProps(state, ownProps) {
    // console.log(state)
    //where trip_id matches url id
        const trip = state.trips.find((trip) => {return trip.id === parseInt(ownProps.params.id)})
        if(trip===undefined){
            return {trip: {name: "", locations: [], description: "", start_date: "", end_date: ""}}
        }else{
        return {trip: trip}
    }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(TripDetail)
