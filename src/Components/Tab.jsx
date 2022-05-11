import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    font-family: "Montserrat", sans-serif;
    color: #333333;
    font-weight: 600;
    line-height: 17px;
    font-size: 14px;
    background: transparent;
    border: none;
    padding-block: 1rem;
    width: 81px;
    display: block;
`

const handleClick = (e, callback) => {
  e.preventDefault();
  callback(e.target.dataset.status.toLowerCase());
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');
}

const Tab = ({section, className, setTab}) => {
  return (
    <Button 
      data-status={section == 'All' ? '': section}
      className={`${className} tab`}
      onClick={(e) => handleClick(e, setTab)}
    >{section}</Button>
  )
}

export default Tab