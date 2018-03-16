import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions/todos';

class TodoItem extends Component {
    constructor(){
        super();

        this.state = {
            isEdit: false
        }
    }

    editTodo = (id) => {
        if (this.state.isEdit) {
            const { value } = this.refs.newItemValue;
            
            if (value) {
                this.props.editTodo(id, value);
            } 
            
            this.setState({
                isEdit: false
            })
        } else {
            this.setState({ isEdit: true })
        }
    }

    removeElement = (id) => {
        this.props.removeTodo(id);
    }

    render() {
        const { id, task } = this.props;
        const editInput = this.state.isEdit ? <input type="text" ref="newItemValue" /> : null;
        return (
            <li>
                {task}
                {editInput}
                <button onClick={() => this.editTodo(id)}>Edit</button>
                <button onClick={() => this.removeElement(id)}>X</button>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    editTodo: (id, update) => dispatch(editTodo(id, update))
})

export default connect(undefined, mapDispatchToProps)(TodoItem);