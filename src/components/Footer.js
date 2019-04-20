import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {clearList, clearCompleted} from "../actions";
import '../styles/footer.scss'

const Footer = ({todos,clearList,clearCompleted}) => {

    return (
        <div className={'footer'}
             style={{
                 display: todos.length ? 'flex' : 'none'
             }}>
            <button onClick={()=>clearCompleted()}>Очистить завершённые</button>
            <button onClick={()=>clearList()}>Очистить все</button>
        </div>
    )
}
Footer.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        date: PropTypes.instanceOf(Date),
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    clearList: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    clearList: () => dispatch(clearList()),
    clearCompleted: () => dispatch(clearCompleted())
})
export default connect(mapStateToProps, mapDispatchToProps)(Footer)