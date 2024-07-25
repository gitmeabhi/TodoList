// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="listItem">
      <p className="title">{title}</p>
      <button type="button" className="btns" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
