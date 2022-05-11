import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: block;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    padding-inline: 40px 39px;
    padding-block: 20px;
    line-height: 17px;
    background-color: #2f80ed;
    border-radius: 12px;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    border: none;
    cursor: pointer;
`

const Input = styled.input`
    inline-size: 100%;
    max-inline-size: 100%;
    display: block;
    color: #828282;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    padding-inline: 12px;
    padding-block: 20px 19px;
    font-size: 14px;
    line-height: 17px;
    border-radius: 12px;
    border: 1px solid #bdbdbd;
`

const AddTask = ({handleInput}) => {
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