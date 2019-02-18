import React from 'react'

function TodoItem(props) {
  const { name } = props
  return (
    <li className="list-group-item">{name}</li>
  )
}

export default TodoItem
