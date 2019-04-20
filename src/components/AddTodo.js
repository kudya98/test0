import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addTodo} from '../actions'
import '../styles/addtodo.scss'


const AddTodo = ({ addTodo }) => {
    let input

    return (
        <div>
            <form className={'add-todo'} onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodo(input.value,new Date())
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Новая задача
                </button>
            </form>
        </div>
    )
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
const mapDispatchToProps = dispatch => ({
    addTodo: (text,date) => dispatch(addTodo(text,date))
})
export default connect(null, mapDispatchToProps)(AddTodo)