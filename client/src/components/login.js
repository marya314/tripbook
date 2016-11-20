import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.logInHandler = this.logInHandler.bind(this)
    }

    logInHandler(event){
        event.preventDefault()
        this.props.actions.logIn({email: this.refs.email.value, password: this.refs.password.value})
    }

    render(){
        return(
        <div id='log-in-form'>
            <form onSubmit={logInHandler}>
                <label>Email Address</label>
                <input input type="email" ref='email' />
                <label>Password:</label>
                <input type="password" ref='password' />
                <button type="submit" className="btn btn-default">Log In</button>
            </form>
        </div>
    )}
}

mapDispatchToProps(dispatch){
    return{actions: bindActionCreators, dispatch}
}

export default connect(null, mapDispatchToProps)(LogIn)
