import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todos';

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
            <div>
                <input type="text" ref="input" /><button onClick={this.handleBtnClick}>Add</button> 
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToList: (task) => dispatch(addTodo(task))
})

export default connect(undefined, mapDispatchToProps)(Addtodo);