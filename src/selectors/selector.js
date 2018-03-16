export default (todos, {text, sortBy}) => {
    return todos.filter((todo) => {
        const textMatch =  todo.task.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a,b) => {
        if (sortBy === 'textdown' ) {
            return a.task.toLowerCase() < b.task.toLowerCase();
        } else if (sortBy === 'textup') {
            return a.task.toLowerCase() > b.task.toLowerCase();
        } else {
            return;
        }
    });
}