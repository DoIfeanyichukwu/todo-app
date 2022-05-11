import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: block;
    color: #fff;
    font-weight: 600;
`

const Input = styled.input`

`

const AddTask = () => {
  return (
    <section className="add_task">
        <div className="add_task_input">
            <label htmlFor="main_input" className='hidden'>add details</label>
             <Input type="text" id='main_input' placeholder='add details' />
        </div>
        <Button>Add</Button>
    </section>
  )
}

export default AddTask