import React from 'react'

const Tasks = (props) => {
  return (
    <ul className="tasks">
        {props.children}
    </ul>
  )
}

export default Tasks