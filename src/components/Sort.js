import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByTextDown, sortByTextUp, sortByDefault } from '../actions/filters'

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
            <button onClick={() => handlerSortFilter('textup')}>Sort up</button>
            <button onClick={() => handlerSortFilter('textdown')}>Sort down</button>
            <button onClick={() => handlerSortFilter('default')}>Sort defalut</button>
            <input type="text" onKeyUp={handleTextFilter} />
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