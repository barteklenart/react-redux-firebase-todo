export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO' : 
            return [
                ...state,
                action
            ];
        case 'REMOVE_TODO' : {
            return state.filter((todo) => todo.id !== action.id);
        }
        case 'EDIT_TODO' :
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        task: action.updates
                    }
                } else {
                    return todo;
                }
            });
        default: 
            return state;
    }
}