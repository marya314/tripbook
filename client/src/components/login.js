import React from 'react';
import { logIn } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.logInHandler = this.logInHandler.bind(this)
    }

    logInHandler(event){
        event.preventDefault()
        // debugger
        this.props.logIn({email: this.refs.email.value, password: this.refs.password.value})
    }

    render(){
        return(
        <div id='log-in-form'>
            <form onSubmit={this.logInHandler}>
                <label>Email</label>
                <input type="email" ref='email' />
                <label>Password:</label>
                <input type="password" ref='password' />
                <button type="submit" className="btn btn-default">Log In</button>
            </form>
        </div>
    )}
}

function mapDispatchToProps(dispatch){
    return {
        logIn: bindActionCreators(logIn, dispatch)
    }
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(LogIn);
