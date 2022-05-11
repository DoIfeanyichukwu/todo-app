import React from 'react'
import styled from 'styled-components'
import Delete from './Delete'

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.strike {
        text-decoration: line-through;
    }
`

const Label = styled.label`
    color: #333333;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
`

const CheckBox = styled.input`
    width: 24px;
    height: 24px;
    background-color: #2f80ed;
    border-radius: 4px;
    margin-inline-end: 7px;
`



const Task = ({task, uuid, tab, strike, tasks, setTasks}) => {

    const handleCheck = (e) => {
        const li = e.target.closest('LI');
        let taskMap;
        if (e.target.checked) {

            taskMap = tasks.map(task => {
    
                if (task.uuid == uuid && e.target.checked) task.status = 'completed';
                return task;
            });
        }else if(e.target.checked == false) {
            taskMap = tasks.map(task => {
    
                if (task.uuid == uuid && e.target.checked) task.status = 'active';
                return task;
            });
        }
        setTasks(taskMap)
        console.log(taskMap)
    }

  return (
    <Li data-uuid={uuid} className={`task_item ${strike ? 'strike' : null}`}>
        <Label>
            <CheckBox 
                onClick={handleCheck}
                type="checkbox" 
                defaultChecked={strike}
            />
            {task}
        </Label>
        {
            tab == 'completed' ? <Delete /> : null
        }
        
    </Li>
  )
}

export default Task