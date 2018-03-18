import React from 'react';
import { connect } from 'react-redux';

import Addtodo from './Addtodo';
import TodoList from './Todolist';
import Sort from './Sort';

import { Button } from 'mdbreact';
import '../css/todopage.css';

import { startLogout } from '../actions/auth';


const TodoPage = (props) => (
    <div className="App">
        <div className="row">
            <div className="col-md-12 log-out">
                <Button onClick={props.startLogout} color="indigo">Log out</Button>
            </div>
        </div>
        <Addtodo />
        <Sort />
        <TodoList />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(TodoPage);