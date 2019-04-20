import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import '../styles/app.scss'

const App = () => (
  <div className={'app'}>
      <Header />
      <AddTodo />
      <TodoList />
      <Footer />
  </div>
)

export default App
