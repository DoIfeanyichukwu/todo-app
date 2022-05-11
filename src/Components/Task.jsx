import React from 'react'
import styled from 'styled-components'
import Delete from './Delete'

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
`

const CheckBox = styled.input`
    width: 24px;
    height: 24px;
    background-color: #2f80ed;
    border-radius: 4px;
    margin-inline-end: 7px;
`



const Task = ({task, uuid, tab}) => {
  return (
    <Li data-uuid={uuid} className="task_item">
        <Label>
            <CheckBox type="checkbox" />
            {task}
        </Label>
        {
            tab == 'completed' ? <Delete /> : null
        }
        
    </Li>
  )
}

export default Task