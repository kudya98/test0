import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addTodo} from '../actions'
import '../styles/addtodo.scss'

const AddTodo = ({ addTodo }) => {
    let input
    let getInputRef = node => input = node
    return (
        <div>
            <form className={'add-todo'} onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodo(input.value)
                input.value = ''
            }}>
                <input ref={getInputRef} />
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
    addTodo: text => dispatch(addTodo(text))
})
export default connect(null, mapDispatchToProps)(AddTodo)