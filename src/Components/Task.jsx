import React from 'react'
import styled from 'styled-components'
import Delete from './Delete'
import formatDistance from 'date-fns/formatDistance'

const Li = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Label = styled.label`
    color: #333333;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    &.strike {
        text-decoration: line-through;
    }
`

const CheckBox = styled.input`
    width: 24px;
    height: 24px;
    background-color: #2f80ed;
    border-radius: 4px;
    margin-inline-end: 7px;
`
const Span = styled.span`
    display: block;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-style: italic;
    font-weight: 400;
    color: #828282;
    font-size: 10px;
    letter-spacing: -.6px;

    @media (min-width: 500px) {
        font-size: 14px;
        letter-spacing: none;
    }
`


const Task = ({task, date, uuid, tab, strike, tasks, setTasks}) => {

    const handleCheck = (e) => {
        let taskMap;
        if (e.target.checked) {

            taskMap = tasks.map(task => {
    
                if (task.uuid == uuid && e.target.checked) task.status = 'completed';
                return task;
            });
        }else {
            taskMap = tasks.map(task => {
    
                if (task.uuid == uuid) task.status = 'active';
                return task;
            });
        }
        setTasks(taskMap)
        localStorage.setItem('todos', JSON.stringify(taskMap));

    }

  return (
    <Li data-uuid={uuid} className='task_item'>
        <Label className={strike ? 'strike': null}>
            <CheckBox 
                onChange={handleCheck}
                type="checkbox" 
                checked={strike}
            />
            {task}
        </Label>

        <Span>{formatDistance(new Date(date), Date.now()) + ' ago'}</Span>

        <Delete tasks={tasks} setTasks={setTasks}/>
        
    </Li>
  )
}

export default Task