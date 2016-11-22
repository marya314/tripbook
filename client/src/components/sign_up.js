import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import { bindActionCreators } from 'redux';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.signUpHandler = this.signUpHandler.bind(this)
    }

    signUpHandler(event) {
        event.preventDefault()
        this.props.signUp({email: this.refs.email.value, name: this.refs.name.value, password: this.refs.password.value, favorite_destinations: this.refs.favorite_destinations.value})
    }


    render(){
        return (
            <div id='sign-up-form'>
                <form onSubmit={ this.signUpHandler} >
                    <h2>Sign Up</h2>
                    <label>Email:</label>
                    <input type="email" ref='email' />
                    <label>Name:</label>
                    <input type="text" ref='name' />
                    <label>Password:</label>
                    <input type="password" ref='password' />
                    <label>Favorite Destinations:</label>
                    <input type="text" ref='favorite_destinations' />
                    <button type="submit" className="btn btn-default">Sign Up</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        signUp: bindActionCreators(signUp, dispatch)
    }
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(SignUp);
