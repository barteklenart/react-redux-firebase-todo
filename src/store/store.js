import { createStore, combineReducers } from 'redux';

import todos from '../reducers/todos';
import filters from '../reducers/filters';

const store = createStore(
    combineReducers({
        todos,
        filters
    })
);



export default store;
