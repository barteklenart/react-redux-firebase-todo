import database from '../firebase/firebase';

export const addTodo = (task) => {
    return (dispatch) => {
        return database.ref('todos').push(task).then((ref) => {
            dispatch({
                type: 'ADD_TODO',
                todo: {
                    id: ref.key,
                    ...task,
                }
            })
        })
    }
};

export const removeTodo = (id) => {
    return (dispatch) => {
        return database.ref(`todos/${id}`).remove().then(() => {
            return dispatch(({
                type: 'REMOVE_TODO',
                id
            }))
        })
    }
}

export const editTodo = (id, updates) => {
    return (dispatch) => {
        return database.ref(`todos/${id}`).update(updates).then(() => {
            return dispatch({
                type: 'EDIT_TODO',
                id,
                updates
            });
        })
    }
}

export const setTodos = () => {
    return (dispatch) => {
        return database.ref('todos').once('value').then((snapshot) => {
            const todos = [];

            snapshot.forEach((childrenSnapshot) => {
                todos.push({
                    id: childrenSnapshot.key,
                    ...childrenSnapshot.val()
                })
            })
            
            return dispatch({
                type: 'SET_TODOS',
                todos
            })
        })

    }
}