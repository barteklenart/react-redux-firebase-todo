import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todos from '../reducers/todos';
import filters from '../reducers/filters';

const store = createStore(
    combineReducers({
        todos,
        filters
    }),
    applyMiddleware(thunk)
);



export default store;
