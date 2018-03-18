import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';

import { setTodos } from './actions/todos';

import { firebase } from './firebase/firebase';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';

const TodoApp = () => (
    <Provider store={store}>
        <div className="container">
            <AppRouter />
        </div>
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