import React from 'react'
import PropTypes from 'prop-types'
import '../styles/todo.scss'

const Todo = ({ actions,  id, completed, text, date }) => (
    <li className={'todo'}
        style={{backgroundColor: completed ? '#999' : '#ddd'}}
        onClick={()=>actions.toggleTodo(id)}
        onMouseEnter={(e)=>e.currentTarget.style.boxShadow="inset 0px 0px 0px 1px green"}
        onMouseLeave={(e)=>e.currentTarget.style.boxShadow="none"}
    >
        <p  style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</p>
        <pre>{date.slice(4,21)}</pre>
        <img
            src={'https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png'}
            onClick={(e)=>{
                e.stopPropagation(); //не вызывать toggleTodo
                actions.removeTodo(id);
            }}
            onMouseEnter={(e)=>e.currentTarget.parentNode.style.boxShadow="inset 0px 0px 0px 1px red"}
            onMouseLeave={(e)=>e.currentTarget.parentNode.style.boxShadow="inset 0px 0px 0px 1px green"}
        >
        </img>
    </li>

)

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
