let todos = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${math.random()}`
    };

    todos.push(todo);
}