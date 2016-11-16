import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TripNew extends React.Component {
    render (){
        return (
            <div>
            <p>create form</p>
                {/* <form>
                    <label>Name:</label>
                    <input ref='name' />
                    <label>Description:</label>
                    <input ref='description' />
                    <label>Start Date:</label>
                    <input ref='start_date' />
                    <label>End Date:</label>
                    <input ref='end_date' />
                </form> */}
            </div>
        )
    }
}

export default TripNew;
