import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';

export default tripNew () {

    render (){
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input ref='name' />
                    <label>Description:</label>
                    <input ref='description' />
                    <label>Start Date:</label>
                    <input ref='start_date' />
                    <label>End Date:</label>
                    <input ref='end_date' />
                </form>
            </div>
        )
    }
}
