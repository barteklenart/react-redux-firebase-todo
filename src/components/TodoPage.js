import React from 'react';
import { connect } from 'react-redux';

import Addtodo from './Addtodo';
import TodoList from './Todolist';
import Sort from './Sort';

import { startLogout } from '../actions/auth';

const TodoPage = (props) => (
    <div className="App">
        <button onClick={props.startLogout}>Log out</button>
        <Addtodo />
        <Sort />
        <TodoList />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(TodoPage);