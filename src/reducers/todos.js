
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: Math.random(),
                    text: action.text,
                    date: new Date(),
                    completed: false
                },
                ...state
            ]
        case 'TOGGLE_TODO':
            let new_todos = state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
            let completed_todos=new_todos.filter(todo => (!todo.completed));
            let incomplete_todos=new_todos.filter(todo => (todo.completed));
            return completed_todos.concat(incomplete_todos); //сортировка
        case 'REMOVE_TODO':
            return state.filter(todo => (todo.id !== action.id) )
        case 'CLEAR_LIST':
            return [];
        case 'CLEAR_COMPLETED':
            return state.filter(todo => (!todo.completed ))
        default:
            return state
    }
}

export default todos
