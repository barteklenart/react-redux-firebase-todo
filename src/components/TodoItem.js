import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions/todos';

import { Button } from 'mdbreact';
import '../css/todopage.css';

class TodoItem extends Component {
    constructor(){
        super();

        this.state = {
            isEdit: false,
            task: ''
        }

    }
    
    componentDidMount(){
        this.setState({
            task: this.props.task
        })
    }

    onTaskChange = (e) => {
        const { value } = e.target;
        this.setState({
            task: value
        })
    }

    editTodo = (id) => {
        if (this.state.isEdit) {
            this.refs['list-el'].classList.toggle('list-group-item--edit');
            const { value } = this.refs.newItemValue;
            
            if (value) {
                this.props.editTodo(id, {task: value});
            } 
            
            this.setState({
                isEdit: false
            })
        } else {
            this.setState({ isEdit: true })
            this.refs['list-el'].classList.toggle('list-group-item--edit')
        }
    }

    removeElement = (id) => {
        this.props.removeTodo(id);
    }

    render() {
        const { id, task } = this.props;
        const editInput = this.state.isEdit ? <input type="text" ref="newItemValue" value={this.state.task} onChange={this.onTaskChange} /> : null;
        const removeBtn = !this.state.isEdit ? <Button size="sm" color="danger" onClick={() => this.removeElement(id)}>X</Button> : null;
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" ref="list-el">
                <span className="list-group-item__task">{task}</span>
                <p className="list_group-item__control">
                    {editInput}
                    <Button size="sm" color="light-green" onClick={() => this.editTodo(id)}>Edit</Button>
                    {removeBtn}
                </p>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    editTodo: (id, update) => dispatch(editTodo(id, update))
})

export default connect(undefined, mapDispatchToProps)(TodoItem);