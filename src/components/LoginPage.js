import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth'

import { Button } from 'mdbreact';
import '../css/loginpage.css';

export const LoginPage = (props) => (
    <div className="loginpage">
        <h1>Todo app</h1>
        <Button color="primary" onClick={props.startLogin}>Logi in</Button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);