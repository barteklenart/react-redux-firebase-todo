export default (todos, {text, sortBy, pagination}) => {
    return todos.filter((todo) => {
        const textMatch =  todo.task.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a,b) => {
        if (sortBy === 'textdown' ) {
            return a.task.toLowerCase() < b.task.toLowerCase() ? 1 : -1;
        } else if (sortBy === 'textup') {
            return a.task.toLowerCase() > b.task.toLowerCase() ? 1 : -1;
        } else {
            return;
        }
    });
}