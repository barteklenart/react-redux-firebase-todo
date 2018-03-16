import uuid from 'uuid'

export const addTodo = (task) => ({
    type: 'ADD_TODO',
    task,
    id: uuid()
});

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})