import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {clearList, clearCompleted} from "../actions";
import '../styles/footer.scss'

const Footer = ({show, clearList, clearCompleted}) => {

    return (
        <div className={'footer'}
             style={{
                 display: show ? 'flex' : 'none'
             }}>
            <button onClick={()=>clearCompleted()}>Очистить завершённые</button>
            <button onClick={()=>clearList()}>Очистить все</button>
        </div>
    )
}
Footer.propTypes = {
    show: PropTypes.number.isRequired,
    clearList: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    show: state.todos.length
})
const mapDispatchToProps = dispatch => ({
    clearList: () => dispatch(clearList()),
    clearCompleted: () => dispatch(clearCompleted())
})
export default connect(mapStateToProps, mapDispatchToProps)(Footer)