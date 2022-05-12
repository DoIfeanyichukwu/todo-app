import React from 'react'
import styled from 'styled-components'
import {MdDeleteOutline} from 'react-icons/md'


const Button = styled.button`
    display: block;
    border: none;
    background: transparent;
    color: #bdbdbd;
    cursor: pointer;

    & > .delete_icon {
        width: 24px;
        height: 24px;
    }
`

const Delete = ({tasks, setTasks}) => {

    const handleDelete = (e) => {
        e.preventDefault();
        let uuid = e.target.closest('li').dataset.uuid;
        const task_map = tasks.filter(task => {
            if (task.uuid != uuid) return task;
        })
        setTasks(task_map);
        localStorage.setItem('todos', JSON.stringify(task_map));
    }

  return (
    <Button
        onClick={handleDelete}
    >
        <MdDeleteOutline className='delete_icon'/>
    </Button>
  )
}

export default Delete