import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';

import { setTodos } from './actions/todos';

import { firebase } from './firebase/firebase';

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState())
})

const TodoApp = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(<TodoApp />, document.getElementById('root'));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(setTodos())
        renderApp();

        if (history.location.pathname === '/') {
            history.push('/app');
        }
    } else {
        renderApp();
        history.push('/');
    }
});

registerServiceWorker();