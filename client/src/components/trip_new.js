import React from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../actions/index';
import { bindActionCreators } from 'redux';

class TripNew extends React.Component {
// debugger
    constructor(props) {
        super(props)
        this.newTripHandler = this.newTripHandler.bind(this)
    }

     newTripHandler(event){
        event.preventDefault()
        const newTrip = {name: this.refs.name.value, description: this.refs.description.value, start_date: this.refs.start_date.value, end_date: this.refs.end_date.value}
// debugger
        this.props.addTrip(newTrip);
    }

    render (){
        return (
            <div className="col-md-6">
            <h2>Add A Trip</h2>
                <form className="form-group" onSubmit={this.newTripHandler}>
                    <label>Name:</label>
                    <input ref='name' />
                    <br></br>
                    <label>Description:</label>
                    <input ref='description' />
                    <br></br>
                    {/* <label>Locations:</label>
                    <input ref='locations' />
                    <br></br> */}
                    <label>Start Date:</label>
                    <input ref='start_date' />
                    <br></br>
                    <label>End Date:</label>
                    <input ref='end_date' />
                    <br></br>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    // debugger
    return {
        addTrip: bindActionCreators(addTrip, dispatch)
    }
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(TripNew);
