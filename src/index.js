import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';

import { setTodos } from './actions/todos';


console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState())
})

const TodoApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

store.dispatch(setTodos())
ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
