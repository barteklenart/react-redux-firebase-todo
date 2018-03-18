import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByTextDown, sortByTextUp, sortByDefault } from '../actions/filters'

import { Button } from 'mdbreact';

const Sort = (props) => {

    const handlerSortFilter = (btn) => {
        switch(btn) {
            case 'textup' :
                props.sortByTextUp();
                break;
            case 'textdown' :
                props.sortByTextDown();
                break;
            case 'default' :
            default: 
                props.sortByDefault();
                break;
        }
    }

    const handleTextFilter = ({target}) => {
        const { value } = target;
        props.setTextFilter(value);
    }

    return (
        <div>
            <Button color="elegant" size="sm" onClick={() => handlerSortFilter('default')}>Sort default</Button>
            <Button color="elegant" size="sm" onClick={() => handlerSortFilter('textup')}>↑</Button>
            <Button color="elegant" size="sm" onClick={() => handlerSortFilter('textdown')}>↓</Button>
            <input type="text" placeholder="Search..." onKeyUp={handleTextFilter} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDefault: () => dispatch(sortByDefault()),
    sortByTextDown: () => dispatch(sortByTextDown()),
    sortByTextUp: () => dispatch(sortByTextUp())
})

export default connect(undefined, mapDispatchToProps)(Sort);