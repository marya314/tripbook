import React from 'react';
import { addLocation } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class LocationNew extends React.Component{
    constructor(props){
        super(props)
        this.newLocationHandler = this.newLocationHandler.bind(this)
    }

    newLocationHandler(event){
       event.preventDefault()
       const newLocation = {name: this.refs.name.value, description: this.refs.description.value}
    // debugger
       this.props.addLocation(newLocation);
    }

    render (){
       return (
           <div className="col-md-6">
           <p>Search for a location or add one below</p>

           <div id='new-location-form'>
           <h2>Add A Location</h2>
               <form className="form-group" onSubmit={this.newLocationHandler}>
                   <label>Name:</label>
                   <input ref='name' />
                   <br></br>
                   <label>Description:</label>
                   <input ref='description' />
                   <br></br>
                   <input type='submit' />
               </form>
               </div>
           </div>
       )
    }
    }

    function mapDispatchToProps(dispatch){
    // debugger
        return {
           addLocation: bindActionCreators(addLocation, dispatch)
        }
    }

    const componentCreator = connect(null, mapDispatchToProps)
    export default componentCreator(LocationNew);
