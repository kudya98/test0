import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { toggleTodo, removeTodo} from "../actions";
import '../styles/todolist.scss'

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
    <ul className={'todo-list'}>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                actions = {{toggleTodo, removeTodo}}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)