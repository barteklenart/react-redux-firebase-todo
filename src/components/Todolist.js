import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

import selectTodo from '../selectors/selector';

const Todolist = (props) => {

    const createList = (todos) => (
        todos.map((todo) => <TodoItem key={todo.id} task={todo.task} id={todo.id} />)
    );

    return (
        <ul>
            {createList(props.todos)}            
        </ul>
    );
}

const mapStateToProps = (state) => ({
    todos: selectTodo(state.todos, state.filters)
})

export default connect(mapStateToProps)(Todolist); 