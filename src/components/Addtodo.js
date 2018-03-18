import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todos';

import { Button, FormInline, Input } from 'mdbreact';
import '../css/todopage.css';

class Addtodo extends Component {
    handleBtnClick = () => {
        const { input } = this.refs;
        if (!input.value) {
            return;
        }

        this.props.addToList({
            task: input.value
        });
        input.value = '';
    }

    render() {
        return (
            <div className="row">
                <div className="col todo-input__section">
                    <input placeholder="Add todo..." type="text" ref="input" className="input-todo" /><Button onClick={this.handleBtnClick} color="primary">Add</Button> 
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToList: (task) => dispatch(addTodo(task))
})

export default connect(undefined, mapDispatchToProps)(Addtodo);