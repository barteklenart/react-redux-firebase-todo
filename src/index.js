import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';

import { addTodo, removeTodo, editTodo } from './actions/todos';


console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addTodo('b first todo'))
store.dispatch(addTodo('a second todo'))
store.dispatch(addTodo('c third todo'))

store.dispatch(removeTodo(1))

store.dispatch(editTodo(0, 'new value for todo'))


const TodoApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
